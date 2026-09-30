$root = $PSScriptRoot
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:8899/")
$listener.Prefixes.Add("http://localhost:8899/")
try {
    $listener.Start()
    Write-Output "HTTP Server listening on http://127.0.0.1:8899/"
    while ($listener.IsListening) {
        try {
            $ctx = $listener.GetContext()
            $rawPath = $ctx.Request.Url.AbsolutePath.TrimStart('/')
            $unescaped = [System.Uri]::UnescapeDataString($rawPath).Replace('/', [System.IO.Path]::DirectorySeparatorChar)
            if ([string]::IsNullOrWhiteSpace($unescaped)) { $unescaped = 'index.html' }
            $full = [System.IO.Path]::Combine($root, $unescaped)
            if ([System.IO.File]::Exists($full)) {
                $ext = [System.IO.Path]::GetExtension($full).ToLower()
                $mime = switch ($ext) {
                    '.html' { 'text/html; charset=utf-8' }
                    '.css'  { 'text/css; charset=utf-8' }
                    '.js'   { 'application/javascript; charset=utf-8' }
                    '.mp3'  { 'audio/mpeg' }
                    '.wav'  { 'audio/wav' }
                    '.png'  { 'image/png' }
                    '.jpg'  { 'image/jpeg' }
                    '.mp4'  { 'video/mp4' }
                    '.webp' { 'image/webp' }
                    '.json' { 'application/json; charset=utf-8' }
                    default { 'application/octet-stream' }
                }
                $ctx.Response.ContentType = $mime
                $ctx.Response.AddHeader("Access-Control-Allow-Origin", "*")
                
                if ($ctx.Request.HttpMethod -eq 'HEAD') {
                    $fileInfo = New-Object System.IO.FileInfo($full)
                    $ctx.Response.ContentLength64 = $fileInfo.Length
                } else {
                    $bytes = [System.IO.File]::ReadAllBytes($full)
                    $ctx.Response.ContentLength64 = $bytes.Length
                    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $ctx.Response.StatusCode = 404
            }
        } catch {
            # Log error without stopping server
        } finally {
            if ($null -ne $ctx) {
                try { $ctx.Response.OutputStream.Close() } catch {}
                try { $ctx.Response.Close() } catch {}
            }
        }
    }
} finally {
    try { $listener.Stop() } catch {}
}

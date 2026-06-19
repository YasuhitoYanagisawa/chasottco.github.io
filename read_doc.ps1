$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open('C:\Users\yasuh\shokumu.doc')
$fullText = $doc.Content.Text
$doc.Close($false)
$word.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($word) | Out-Null
[System.IO.File]::WriteAllText('C:\Users\yasuh\shokumu_full.txt', $fullText, [System.Text.Encoding]::UTF8)

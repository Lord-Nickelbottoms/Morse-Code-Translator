function copyToClipboard() {
    const outputText = document.getElementById('morse-output');
    outputText.focus()
    outputText.select();

    if (!navigator.clipboard) {
        console.error('Clipboard API not supported');
        alert('Clipboard API not supported in this browser.');
        return;
    } else if (!outputText.value) {
        alert('Nothing to copy.');
    }

    navigator.clipboard.writeText(outputText.value).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Akademika</title>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>
{{-- <script type="text/javascript" src="https://app.sandbox.midtrans.com/snap/snap.js"
    data-client-key="SB-Mid-client-sNFHj-ePZOzmxetY"></script> --}}

<body class="bg-white">
    <div id="app"></div>
</body>
{{-- <script type="text/javascript">
    // For example trigger on button clicked, or any time you need
    var payButton = document.getElementById('pay-button');
    payButton.addEventListener('click', function() {
        // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
        var snapToken = document.getElementById("inputSnapToken").value;
        window.snap.pay(token);
        // customer will be redirected after completing payment pop-up
    });
</script> --}}

</html>

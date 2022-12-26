<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Akademika</title>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>

<body class="bg-white" onmouseover="refreshMidtrans();">
    <div id="app"></div>
</body>

<form hidden action="/api/siswa/kursus/berhasil" method="post" id="form">
    @csrf
    <input type="text" id="result" name="result" value="">
    {{-- <button type="submit">Submit</button> --}}
</form>

{{-- <input type="text" id="refresh" value="" onchange="refreshMidtrans();"> --}}
<script type="text/javascript">

    function refreshMidtrans() {
        var getToken = setInterval(() => {
            if (document.getElementById('snapToken') != null && document.getElementById('snapToken').value !=
                null && document.getElementById('pay-button') != null) {
                var snapToken = document.getElementById('snapToken').value;
                var kursus_id = document.getElementById('kursus_id').value;
                var payButton = document.getElementById('pay-button');
                if (snapToken != null && snapToken != "" && snapToken != "[object HTMLInputElement]" &&
                    payButton != null) {
                    // alert(snapToken);
                    var payButton = document.getElementById('pay-button');
                    payButton.addEventListener('click', function() {
                        // Trigger snap popup. @TODO: Replace TRANSACTION_TOKEN_HERE with your transaction token
                        window.snap.pay(snapToken, {
                            onSuccess: function(result) {
                                /* You may add your own implementation here */
                                // alert("payment success!");
                                // window.location.reload();
                                // document.getElementById("result").value = JSON.stringfy(result);
                                // document.getElementById("form").submit();
                                // sessionStorage.setItem("result", JSON.stringfy(result));
                                // console.log(snapToken);
                                localStorage.setItem(result.transaction_id, result);
                                console.log(result.transaction_id);
                                window.location.replace(`/siswa/kursus/${kursus_id}/detail/${result.transaction_id}`);
                            },
                            onPending: function(result) {
                                /* You may add your own implementation here */
                                alert("wating your payment!");
                                // console.log(result);
                                // alert(JSON.stringfy(result));
                            },
                            onError: function(result) {
                                /* You may add your own implementation here */
                                // alert("payment failed!");
                                // console.log(result);
                            },
                            onClose: function() {
                                /* You may add your own implementation here */
                                // alert('you closed the popup without finishing the payment');
                            }
                        })
                    });
                    clearInterval(getToken);
                }
            }
                // alert(snapToken);
        }, 1000);
    }
</script>

</html>

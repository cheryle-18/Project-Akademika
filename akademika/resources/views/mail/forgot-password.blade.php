<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <style>
        body{
            -webkit-text-size-adjust: none;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
                'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            position: relative;
            width: 100% !important;
            background-color: rgb(248, 248, 248);
        }
        .title{
            font-weight: bold;
            font-size: xx-large;
            text-align: center;
        }
        .verify-button{
            background-color: rgb(147, 200, 226);
            font-weight: bold;
            padding: 1rem 1.5rem 1rem 1.5rem;
            border-radius: 0.25rem;
            text-decoration: none;
        }
        .verify-button:hover{
            background-color: rgb(19, 125, 177);
            color:white;
        }
    </style>
</head>
<body>
    <header class="center" style="background-color:#1A355B;color:white;text-align: center; padding: 0.5em 0 0.5em 0" >
        <h1>Akademika</h1>
    </header>

    <div style="display:flex; justify-content:center;">
        <section style="padding: 2rem 7rem 2rem 7rem; width:100%">
            <div class="title" style="margin-bottom: 2.5rem;">
            Forgot Password</div>
            <h3>Halo, {{ $user->email }} !</h3>
            <p>Seseorang telah melakukan permintaan untuk merubah password akun ini</p>
            <p>Silahkan menekan tombol di bawah ini untuk merubah password anda!</p>
            <br><br>

            <table class="action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                    <td align="center">
                        <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                                <td align="center">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                        <tr>
                                            <td>
                                                <a href="{{ $url }}" class="verify-button" target="_blank" rel="noopener">Ubah Password</a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <br><br>
            <p>Jika permintaan verifikasi ini tidak anda kenali, anda dapat mengabaikan pesan ini.</p>
        </section>
    </div>


    <footer style="background-color: #1A355B; padding: 2em 0 2em 0; color:white">
        <table class="footer" align="center" width="400" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
                <td align="center" colspan="5">
                    © {{ date('F') }} 2022</a>
                </td>
            </tr>
            <tr>
                <td align="center" colspan="5">
                    Tim Akademika</a>
                </td>
            </tr>
        </table>
    </footer>
</body>
</html>

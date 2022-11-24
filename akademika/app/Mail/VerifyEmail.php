<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerifyEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user, $url)
    {
        //
        $this->user = $user;
        $this->url = $url;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('kursusakademika@gmail.com', 'Kursus Akademika')
        ->subject('Verifikasi Email Akademika Anda!')
        ->view('mail.verification-email')
        ->with([
            'user_email' => $this->user->email,
            'verification_url' => $this->url,
        ]);
    }
}

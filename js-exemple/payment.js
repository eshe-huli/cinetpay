(function () {

    var sweetAlert2Url = "//cdn.jsdelivr.net/npm/sweetalert2@10";
    var polyfillUrl = "//cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.js";
    var cinetPaySeamless = "https://www.cinetpay.com/cdn/seamless_sdk/latest/cinetpay.prod.min.js";
    function dynamicallyLoadScript(url) {
        var script = document.createElement("script");  // create a script DOM node
        script.src = url;  // set its src to the provided URL
        document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
    }
    // dynamicallyLoadScript(cinetPaySeamless);
    dynamicallyLoadScript(sweetAlert2Url);
    dynamicallyLoadScript(polyfillUrl);

    //Application des méthodes
    var site_id = 551054;
    var apikey = '19031599135ff441c7b70865.48289010';
    var notify_url = 'http://mondomaine.com/notify/';
    var return_url = 'http://mondomaine.com/notify/';
    var cancel_url = 'http://mondomaine.com/notify/';
    var currency = 'CFA';
    var debug = 1;

    //-------------Configuration
    CinetPay.setConfig({
        apikey: apikey,
        site_id: site_id,
        notify_url: notify_url
    });

    var cinetpayPayButtons = document.getElementsByClassName('cinetpayPayButton');
    Array.prototype.forEach.call(cinetpayPayButtons, function (cinetpayPayButton) {
        cinetpayPayButton.addEventListener('click', function () {
            var parentForm = this.form;//Get inner form
            var parentFormElements = parentForm.elements
            var designation = parentFormElements['designation'].value || 'PISAM-CARD';
            var custom = parentFormElements['cpm_custom'].value || 'PISAM-CARD';
            var trans_id_date = new Date().toISOString().replace(/[T]/, '.').replace(/[-,: , T]/gm, '').slice(0, 15);
            var trans_id = 'PISAM-CARD.' + trans_id_date + '.' + Math.floor((Math.random() * 10000000) + 10000);
            var amount = fiveMultipleRound(parseInt(parentFormElements['amount'].value, 10));
            CinetPay.setSignatureData({
                amount: parseInt(amount),
                trans_id: trans_id,
                currency: currency,
                designation: designation + '-' + amount + '-' + currency,
                custom: custom
            });
            CinetPay.getSignature();
            CinetPay.on('signatureCreated', function (token) { 'token: ', console.log(token) });
            CinetPay.on('paymentPending', function (e) { console.log(e) });
            CinetPay.on('error', function (e) {
                Swal.fire({
                    title: 'Error!',
                    text: e,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            });
            CinetPay.on('paymentSuccessfull', function (paymentInfo) {
                if (typeof paymentInfo.lastTime != 'undefined') {
                    if (paymentInfo.cpm_result == '00') {
                        Swal.fire({
                            type: 'success',
                            html: 'Le paiement de votre carte a été effectué avec succès : <br> Montant : ' + paymentInfo.cpm_amount + ' FCFA <br>'
                        }).then(function () {
                            location.reload(!0)
                        })
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Votre paiement a échoué',
                            icon: 'error',
                            confirmButtonText: 'Fermer'
                        })
                    }
                }
            });
        })
    })

    function fiveMultipleRound(n) {
        var temp = n;
        if (n % 5 == 0)
            null;
        else if (n % 5 < 2.5)
            temp -= n % 5;
        else
            temp += (5 - n % 5);
        return temp;
    }
})();
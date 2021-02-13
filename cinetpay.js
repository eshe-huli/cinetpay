/**
 * CinetPay @2016-2018 -Tout droit reservĂŠ
 * Author : Fawaz ADISA
 * V1.1.0
 */
var cssId = "cinetPayId";
if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName("head")[0],
        link = document.createElement("style");
    (link.id = cssId),
        (link.innerHTML =
            "html{overflow-y:scroll;-webkit-overflow-scrolling:touch}.has-overlay{overflow:hidden;height:auto}.has-overlay>body{height:100%;overflow:hidden}.modal--fade,.modal--show{-webkit-transform:translate(0,100%);-moz-transform:translate(0,100%);-o-transform:translate(0,100%);-ms-transform:translate(0,100%);transform:translate(0,100%);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);position:fixed;top:0;left:0;right:0;bottom:0;z-index:1999;width:0;height:0;overflow:hidden;opacity:0;display:none9}.modal--fade:target,.modal--show:target,.is-active.modal--fade,.is-active.modal--show{-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-o-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);width:auto;height:auto;opacity:1}.is-active.modal--fade,.is-active.modal--show{display:block9;height:100% 9;width:100% 9}.modal--fade:target,.modal--show:target,.is-active.modal--fade,.is-active.modal--show{display:block9}.modal--fade .modal-inner,.modal--show .modal-inner{position:absolute;top:60px;left:50%;z-index:1055;margin-left:-325px;width:650px;height:650px;overflow-x:hidden;-webkit-overflow-scrolling:touch}.modal--fade .modal-inner>img,.modal--show .modal-inner>img,.modal--fade .modal-inner>video,.modal--show .modal-inner>video,.modal--fade .modal-inner>iframe,.modal--show .modal-inner>iframe{width:100%;min-height:400px}.modal--fade .modal-inner>img,.modal--show .modal-inner>img{width:auto;max-width:100%}.modal--fade .modal-inner iframe,.modal--show .modal-inner iframe{display:block;width:100%;border:0;height:inherit;overflow-y:hidden}.modal--fade .modal-content,.modal--show .modal-content{position:relative;max-height:100% !important;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;height:100%}.modal--fade .modal-content>*,.modal--show .modal-content>*{max-width:100%}.modal--fade footer,.modal--show footer{border-top:1px solid white;padding:0 1.2em 18px;background:#f0f0f0;border-radius:2px}.modal--fade .modal-close,.modal--show .modal-close{display:block;height:1px;clip:rect(0 0 0 0);margin:-1px;overflow:hidden}.modal--fade .modal-close:focus:after,.modal--show .modal-close:focus:after{outline:1px dotted;outline:-webkit-focus-ring-color auto 5px}.modal--fade .modal-close:before,.modal--show .modal-close:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;z-index:1051}.modal--fade .modal-close:after,.modal--show .modal-close:after{content:'X Fermer';position:absolute;top:35px;right:50%;z-index:1055;margin-right:-325px}@media screen and (max-width:690px){.modal--fade .modal-inner,.modal--show .modal-inner{width:auto;left:20px;right:20px;margin-left:0}.modal--fade .modal-close:after,.modal--show .modal-close:after{margin-right:0 !important;right:20px}}@media screen and (max-width:30em){.modal--fade,.modal--show{-webkit-transform:translate(0,400px);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transition:opacity 1ms .25s;-moz-transition:opacity 1ms .25s;-o-transition:opacity 1ms .25s;-ms-transition:opacity 1ms .25s;transition:opacity 1ms .25s;display:block;right:auto;bottom:auto}.modal--fade:target,.modal--show:target,.is-active.modal--fade,.is-active.modal--show{width:100%;height:100%}.modal--fade:target .modal-close,.modal--show:target .modal-close,.is-active.modal--fade .modal-close,.is-active.modal--show .modal-close{display:block}.modal--fade .modal-inner,.modal--show .modal-inner{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;top:0;left:0;right:0;height:100%;overflow:auto}.modal--fade .modal-content,.modal--show .modal-content{max-height:none;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;hyphens:auto}.modal--fade .modal-close,.modal--show .modal-close{display:none;right:auto}.modal--fade .modal-close:before,.modal--show .modal-close:before{content:'';position:fixed;top:0;left:0;right:0;z-index:1055}.modal--fade .modal-close:after,.modal--show .modal-close:after{top:5px !important;right:5px;left:auto;margin-left:0}}@media screen and (max-height:46em) and (min-width:30em){.modal--fade .modal-content,.modal--show .modal-content{max-height:500px}}@media screen and (max-height:36em) and (min-width:30em){.modal--fade .modal-content,.modal--show .modal-content{max-height:400px}}.is-stacked.modal--fade,.is-stacked.modal--show{-webkit-transform:translate(0,0) scale(1,1);-moz-transform:translate(0,0) scale(1,1);-o-transform:translate(0,0) scale(1,1);-ms-transform:translate(0,0) scale(1,1);transform:translate(0,0) scale(1,1);opacity:1}.is-stacked.modal--fade .modal-inner,.is-stacked.modal--show .modal-inner{-webkit-animation:scaleDown .7s ease both;-moz-animation:scaleDown .7s ease both;animation:scaleDown .7s ease both}.is-stacked.modal--fade .modal-close,.is-stacked.modal--show .modal-close{opacity:0}@media screen and (max-width:30em){.is-stacked.modal--fade,.is-stacked.modal--show{-webkit-animation:scaleDown .7s ease both;-moz-animation:scaleDown .7s ease both;animation:scaleDown .7s ease both}.is-stacked.modal--fade .modal-inner,.is-stacked.modal--show .modal-inner{-webkit-animation:none;-moz-animation:none;animation:none}.is-stacked.modal--fade .modal-close,.is-stacked.modal--show .modal-close{opacity:1}}@media screen and (min-width:30em){.modal--fade{transition:opacity .4s}}.modal--fade,.modal--show{color:#222;line-height:1.3}.modal--fade .modal-inner,.modal--show .modal-inner{border-radius:2px;background:#fff;-webkit-box-shadow:0 0 30px rgba(0,0,0,0.6);box-shadow:0 0 30px rgba(0,0,0,0.6);max-width:100%;-webkit-transition:max-width .25s linear,margin-left .125s linear;transition:max-width .25s linear,margin-left .125s linear}.modal--fade header,.modal--show header{border-bottom:1px solid #ddd;padding:0 1.2em}.modal--fade header>h2,.modal--show header>h2{margin:.5em 0}.modal--fade .modal-content,.modal--show .modal-content{border-bottom:1px solid #ddd;padding:15px 1.2em}.modal--fade footer,.modal--show footer{border-top:1px solid white;padding:0 1.2em 18px;background:#f0f0f0;border-radius:2px}.modal--fade .modal-close,.modal--show .modal-close{text-indent:-100px}.modal--fade .modal-close:before,.modal--show .modal-close:before{background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAEUlEQVQoz2NgeEYAjioYSQoAzOTmAXhPhyoAAAAASUVORK5CYII=')}.modal--fade .modal-close:after,.modal--show .modal-close:after{content:'X Fermer';background:#fff;border-radius:2px;padding:2px 8px;font-size:1.2em;text-decoration:none;text-indent:0}@media screen and (max-width:30em){.modal--fade .modal-close:before,.modal--show .modal-close:before{background:#449d44;height:3em;-webkit-box-shadow:0 0 5px rgba(0,0,0,0.6);box-shadow:0 0 5px rgba(0,0,0,0.6)}.modal--fade .modal-inner,.modal--show .modal-inner{padding-top:3em;-webkit-box-shadow:none;box-shadow:none}.modal--fade .modal-close,.modal--show .modal-close{text-decoration:none}.modal--fade .modal-close:after,.modal--show .modal-close:after{content:attr(data-close);font-size:1em;padding:.5em 1em}}[data-cssmodal-maxwidth] .modal-inner{width:100%}@media screen and (max-width:690px){[data-cssmodal-maxwidth] .modal-inner{left:50%}[data-cssmodal-maxwidth] .modal-close:after{right:50% !important}}@media screen and (max-width:30em){[data-cssmodal-maxwidth] .modal-inner{max-width:100% !important;margin-left:0 !important}[data-cssmodal-maxwidth] .modal-close:after{margin-right:0 !important;right:0 !important}}"),
        head.appendChild(link);
}
!(function () {
    (this.Modal = function () {
        var e;
        (this.closeButton = null),
            (this.modal = null),
            (this.overlay = null),
            (this.transitionEnd = (e = document.createElement("div")).style
                .WebkitTransition
                ? "webkitTransitionEnd"
                : e.style.OTransition
                    ? "oTransitionEnd"
                    : "transitionend"),
            arguments[0] &&
            "object" == typeof arguments[0] &&
            (this.options = (function (e, a) {
                var o;
                for (o in a) a.hasOwnProperty(o) && (e[o] = a[o]);
                return e;
            })(
                {
                    autoOpen: !1,
                    className: "fade-and-drop",
                    closeButton: !0,
                    content: "",
                    height: 100,
                    overlay: !0,
                },
                arguments[0]
            )),
            !0 === this.options.autoOpen && this.open();
    }),
        (Modal.prototype.close = function () {
            var e = this;
            (this.modal.className = this.modal.className.replace(" jh-open", "")),
                (this.overlay.className = this.overlay.className.replace(
                    " jh-open",
                    ""
                )),
                this.modal.addEventListener(this.transitionEnd, function () {
                    e.modal.parentNode.removeChild(e.modal);
                }),
                this.overlay.addEventListener(this.transitionEnd, function () {
                    e.overlay.parentNode && e.overlay.parentNode.removeChild(e.overlay);
                });
        }),
        (Modal.prototype.open = function () {
            (function () {
                var e, a, o;
                (e =
                    "string" == typeof this.options.content
                        ? this.options.content
                        : this.options.content.innerHTML),
                    (o = document.createDocumentFragment()),
                    (this.modal = document.createElement("div")),
                    (this.modal.className = "jh-modal " + this.options.className),
                    (this.modal.style.height = this.options.height + "%"),
                    !0 === this.options.closeButton &&
                    ((this.closeButton = document.createElement("button")),
                        (this.closeButton.className = "jh-close close-button modal-close"),
                        (this.closeButton.innerHTML = "&times;"),
                        this.modal.appendChild(this.closeButton)),
                    !0 === this.options.overlay &&
                    ((this.overlay = document.createElement("div")),
                        (this.overlay.className = "jh-overlay " + this.options.className),
                        o.appendChild(this.overlay)),
                    ((a = document.createElement("div")).className = "jh-content"),
                    (a.innerHTML = e),
                    this.modal.appendChild(a),
                    o.appendChild(this.modal),
                    document.body.appendChild(o);
            }.call(this),
                function () {
                    this.closeButton &&
                        this.closeButton.addEventListener("click", this.close.bind(this)),
                        this.overlay &&
                        this.overlay.addEventListener("click", this.close.bind(this));
                }.call(this),
                window.getComputedStyle(this.modal).height,
                (this.modal.className =
                    this.modal.className +
                    (this.modal.offsetHeight > window.innerHeight
                        ? " jh-open jh-anchored"
                        : " jh-open")),
                (this.overlay.className = this.overlay.className + " jh-open"));
        });
})(),
    (CinetPay = (function () {
        var e = !1,
            a = 0,
            o = { code: "error_payment", message: "something goes wrong" },
            t = "cpm_",
            n = "https://api.cinetpay.com/v2",
            i = {},
            d = {},
            s = "",
            r = {
                signatureCreated: null,
                error: null,
                paymentSuccessfull: null,
                paymentPending: null,
                checkPaymentStatusStart: null,
                checkPaymentStatusStop: null,
                ajaxStart: null,
                ajaxStop: null,
            },
            l = {
                cpm_currency: "CFA",
                cpm_page_action: "PAYMENT",
                cpm_payment_config: "SINGLE",
                cpm_amount: 0,
                cpm_trans_id: "",
                cpm_designation: "",
                cpm_custom: "",
                cpm_phone_prefixe: "",
                cel_phone_num: "",
            },
            m = {
                apikey: "",
                cpm_site_id: 0,
                cpm_version: "V2",
                cpm_language: "fr",
                cpm_trans_date: "",
                notify_url: "",
            },
            c = function (a, o) {
                "function" == typeof r[a] && ("error" === a && (e = !1), r[a](o));
            },
            h = function (e, a) {
                var o = !1;
                switch (e.toLowerCase()) {
                    case "site_id":
                        "number" != typeof a &&
                            (o = {
                                code: "error_config",
                                message: "Site ID " + a + "is not valid",
                            });
                        break;
                    case "version":
                        ["V1", "V2"].indexOf(a) < 0 &&
                            (o = {
                                code: "error_config",
                                message: "API version " + a + "is not available",
                            });
                        break;
                    case "language":
                        ["fr", "en", "ru", ""].indexOf(a) < 0 &&
                            (o = {
                                code: "error_config",
                                message: "language " + a + "is not available",
                            });
                }
                return o ? (c("error", o), null) : a;
            },
            p = function (e, a) {
                var o = !1;
                switch (e.toLowerCase()) {
                    case "amount":
                        "number" != typeof a &&
                            (o = {
                                code: "error_payment_data",
                                message: "Amount value is not correct ",
                            });
                        break;
                    case "currency":
                        ["CFA", "EUR", "XOF", "XAF", "CDF", "USD"].indexOf(a) < 0 &&
                            (o = {
                                code: "error_payment_data",
                                message: "Currency " + a + "is not available",
                            });
                        break;
                    case "page_action":
                        ["PAYMENT"].indexOf(a) < 0 &&
                            (o = {
                                code: "error_payment_data",
                                message: "Page Action is " + a + "is not available",
                            });
                }
                return o ? (c("error", o), null) : a;
            },
            f = function () {
                return (
                    !!(function () {
                        for (var a in m) if (null === h(a, m[a])) return !1;
                        return (e = !0), !0;
                    })() &&
                    (function () {
                        for (var a in i) if (null === p(a, i[a])) return !1;
                        return (e = !0), !0;
                    })()
                );
            },
            u = function (e, a) {
                var o = {};
                for (var t in e) o[t] = e[t];
                for (var n in a) o[n] = a[n];
                return o;
            },
            g = function (e) {
                c("checkPaymentStatusStart");
                var a = {
                    apikey: m.apikey,
                    cpm_site_id: m.cpm_site_id,
                    cpm_trans_id: d.cpm_trans_id,
                };
                b.post({
                    url: n + "/?method=checkPayStatus",
                    data: a,
                    callbacks: {
                        error: r.error,
                        success: function (a) {
                            void 0 === a.transaction
                                ? (w(), r.error({}))
                                : (c("checkPaymentStatusEnd", {
                                    code: a.transaction.cpm_result,
                                    message: a.transaction.cpm_trans_status,
                                }),
                                    void 0 === e || (1 == e && (a.transaction.lastTime = "ok")),
                                    void 0 !== a.transaction.cpm_amount
                                        ? "00" == a.transaction.cpm_result
                                            ? (w(),
                                                a.transaction.cpm_amount != d.cpm_amount
                                                    ? r.error({
                                                        code: "payment_error",
                                                        message:
                                                            "Difference in charged amount, please contact CINETPAY.",
                                                    })
                                                    : r.paymentSuccessfull(a.transaction))
                                            : "" === a.transaction.cpm_result ||
                                                "623" === a.transaction.cpm_result
                                                ? void 0 === e
                                                    ? r.paymentPending({
                                                        code: a.transaction.cpm_result,
                                                        message: a.transaction.cpm_trans_status,
                                                    })
                                                    : 1 == e &&
                                                    ("" == a.transaction.cpm_error_message &&
                                                        (a.transaction.cpm_error_message =
                                                            "User Cancel Payment"),
                                                        r.paymentSuccessfull(a.transaction))
                                                : r.error({
                                                    code: a.transaction.cpm_result,
                                                    message: a.transaction.cpm_trans_status,
                                                })
                                        : (w(), r.error(o)));
                        },
                    },
                }),
                    c("checkPaymentStatusStop");
            },
            w = function () {
                clearInterval(a);
            },
            y = function (e) {
                var a = document.createElement("div");
                (a.innerHTML =
                    "<section class='is-active modal--fade' id='cinetPayModal' tabindex='-1' role='dialog' aria-labelledby='modal-label' aria-hidden='true'><div class='modal-inner'>        <div class='modal-content'>            <iframe src='" +
                    e +
                    "' allowfullscreen='' frameborder='0' style=' overflow:hidden !important;'></iframe>        </div>    </div>    <a href='#' class='modal-close' id='cinetpayCloseModal' title='Fermer la boite de dialogue' data-close='Fermer'        data-dismiss='modal'>Fermer</a></section>"),
                    document.body.appendChild(a);
                var o = new Modal({ content: a });
                o.open(),
                    (a.innerHTML = ""),
                    document
                        .getElementById("cinetpayCloseModal")
                        .addEventListener("click", function (e) {
                            var a = document.getElementById("cinetPayModal"),
                                t = document.querySelectorAll(".fade-and-drop");
                            a.innerHTML = "";
                            for (var n = 0, i = t.length; n < i; n++) t[n].innerHTML = "";
                            o.close(), w(), g(!0);
                        });
            },
            b = {
                x: function () {
                    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();
                    for (
                        var e,
                        a = [
                            "MSXML2.XmlHttp.6.0",
                            "MSXML2.XmlHttp.5.0",
                            "MSXML2.XmlHttp.4.0",
                            "MSXML2.XmlHttp.3.0",
                            "MSXML2.XmlHttp.2.0",
                            "Microsoft.XmlHttp",
                        ],
                        o = 0;
                        o < a.length;
                        o++
                    )
                        try {
                            e = new ActiveXObject(a[o]);
                            break;
                        } catch (e) { }
                    return e;
                },
                _send: function (e, a, o, t, n) {
                    void 0 === n && (n = !0);
                    var i = b.x();
                    "function" == typeof r.ajaxStart && r.ajaxStart(),
                        i.open(o, e, n),
                        (i.onreadystatechange = function () {
                            i.readyState == XMLHttpRequest.DONE &&
                                (200 == i.status
                                    ? void 0 !== a.success &&
                                    a.success(JSON.parse(i.responseText))
                                    : void 0 !== a.error &&
                                    a.error({ code: "ajax_error", message: i.responseText }),
                                    "function" == typeof r.ajaxStop && r.ajaxStop());
                        }),
                        "POST" == o &&
                        i.setRequestHeader(
                            "Content-type",
                            "application/x-www-form-urlencoded"
                        ),
                        i.send(t);
                },
                post: function (e, a) {
                    var o = [];
                    for (var t in e.data)
                        o.push(encodeURIComponent(t) + "=" + encodeURIComponent(e.data[t]));
                    b._send(e.url, e.callbacks, "POST", o.join("&"), a);
                },
            };
        return {
            on: function (e, a) {
                void 0 !== r[e] && "function" == typeof a && (r[e] = a);
            },
            setConfig: function (e) {
                for (var a in e)
                    void 0 !== m[t + a]
                        ? (m[t + a] = h(a, e[a]))
                        : "apikey" === a
                            ? (m.apikey = e.apikey)
                            : "notify_url" === a
                                ? (m.notify_url = e.notify_url)
                                : "cel_phone_num" === a && (m.cel_phone_num = e.cel_phone_num);
            },
            setSignatureData: function (e) {
                for (var a in ((i = JSON.parse(JSON.stringify(l))), e))
                    void 0 !== i[t + a]
                        ? (i[t + a] = p(a, e[a]))
                        : "cel_phone_num" === a && (i[a] = p(a, e[a]));
            },
            checkData: function () {
                return f();
            },
            getSignature: function (o) {
                console.table('get signature : ', { o });
                if (!f()) return !1;
                var t;
                (t = new Date()
                    .toISOString()
                    .match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/)),
                    (m.cpm_trans_date = t[1] + " " + t[2]),
                    ((d = u(m, i)).cpm_page_action = "PAYMENT"),
                    (d.cpm_payment_config = "SINGLE"),
                    "function" == typeof o && (r.signatureCreated = o),
                    b.post({
                        url: n + "/?method=getSignatureByPost",
                        data: d,
                        callbacks: {
                            error: r.error,
                            success: function (o) {
                                void 0 !== o.status
                                    ? r.error(o.status)
                                    : ((s = o),
                                        (d.signature = o),
                                        r.signatureCreated(s),
                                        (function () {
                                            if (e) {
                                                var o = u(d);
                                                o.origine = "sdk_js_v1.0";
                                                var t = (function (e) {
                                                    var a = [];
                                                    for (var o in e)
                                                        e.hasOwnProperty(o) &&
                                                            a.push(
                                                                encodeURIComponent(o) +
                                                                "=" +
                                                                encodeURIComponent(e[o])
                                                            );
                                                    return a.join("&");
                                                })(o);
                                                return (
                                                    y("https://secure.cinetpay.com/?" + t),
                                                    void (a = setInterval(function () {
                                                        g();
                                                    }, 6e3))
                                                );
                                            }
                                            r.error({
                                                code: "payment_error",
                                                message: "no signature",
                                            });
                                        })());
                            },
                        },
                    });
            },
            stopPaymentStatusCheck: function () {
                w();
            },
        };
    })());

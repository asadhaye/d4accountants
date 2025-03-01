window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'AW-16510595383');
!function (d, s, u, t, e, old_advertio_track) {
    t = d.createElement(s);

    t.async = !0;
    t.src = u;
    e = d.getElementsByTagName(s)[0];
    e.parentNode.insertBefore(t, e)

    old_advertio_track = window.advertio_track
    window.advertio_track = () => {
        gtag('event', 'conversion', {
            'send_to': 'AW-16510595383/WerzCNSA1Z8ZELfi7sA9',
            'value': 0.0,
            'currency': 'EUR'
        })
        if (old_advertio_track) {
            old_advertio_track()
        }
    }
}(document, 'script', 'https://www.googletagmanager.com/gtag/js?id=AW-16510595383');
;!function (w, d, t, r, u) {
    var f, n, i;
    w[u] = w[u] || [],
        f = function () {
            var o = {
                ti: "97109461"
            };
            o.q = w[u];
            w[u] = new UET(o);
            w[u].push("pageLoad");
        };
    n = d.createElement(t);
    n.src = r;
    n.async = 1;
    n.onload = n.onreadystatechange = function () {
        var s = this.readyState;
        var old_advertio_track = window.advertio_track;
        s && s !== "loaded" && s !== "complete" || (
            f(),
            window.advertio_track = () => {
                window.uetq = window.uetq || [];
                window.uetq.push('event', 'click', { 'event_category': '08c60166-c9c7-4179-840b-a2b0d55afc2e' });
                if (old_advertio_track) {
                    old_advertio_track()
                }
            },
            n.onload = n.onreadystatechange = null
        )
    };
    i = d.getElementsByTagName(t)[0];
    i.parentNode.insertBefore(n, i)
}(window, document, "script", "https://bat.bing.com/bat.js", "uetq");

<script th:if="${challenge?.challengeNumber == 16}" src="/js/index.js"></script>
    <!--  Like this sort of challenges? Try https://juice-shop.herokuapp.com/#/score-board for many more of them!  -->
<script th:if="${challenge?.challengeNumber == 16}">
    const password = secret();
    const httpRequest = new XMLHttpRequest();
    httpRequest.open("POST", "/token", true);
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpRequest.send("grant_type=client_credentials"
    + "&client_id=" + encodeURIComponent("WRONGSECRET_CLIENT_ID")
    + "&client_secret=" + encodeURIComponent(password));
</script>

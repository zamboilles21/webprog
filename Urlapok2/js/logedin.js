<script>
if (!sessionStorage.getItem('access')) {
    document.location.href='login.html'
}else{
    loggeduser=JSON.parse(sessionStorage.getItem('access'));
    document.getElementById('name').value=loggeduser.loggedUser;
    document.getElementById('email').value=loggeduser.loggeduserMail;
}
</script>
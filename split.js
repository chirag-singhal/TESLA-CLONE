<script type="text/javascript" language="javascript">
    
    var name = prompt("Enter Your Name");
    var ar = name.split("");
    var time;
     function show()
        {
            
            if(ar.length>0){
                    
                    
                    document.getElementById("js").innerHTML+= ar.shift();
                    var time =setTimeout('show()',200);}
        }
        show();
    
</script>
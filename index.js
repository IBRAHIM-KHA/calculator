var v=""
    var imp=""
    var op=0
    var sur=""
    var ad=0
    var op2=0
    var ad2=0
    var radi=1
    var degr=0
    var sqr1=""
    var sqr2=0
    var pq=0
    var de3=""
    var imp2=""
    var de2=""
    document.getElementById("radians").style.color = "aqua"
    function sqr() {
        var cl=v
        de2=v
        de3=document.getElementById("display").innerHTML
        var ar1=Array.from(cl)
        var la1=ar1.length
        var en=0
        var sq=""
        
        if(la1>0)
        {
            pq=1
            for(let i=la1-1;i>=0;i--)
            {

                if(ar1[i]=="*"||ar1[i]=="+"||ar1[i]=="-"||ar1[i]=="!"||ar1[i]=="/")
                {
                  en=i+1
                  break
                }
            }
            for(let i=en;i<la1;i++){
                sq+=ar1[i]
            }
            v=v.substring(0,en)
            sqr1=v
            sqr2=Math.pow(sq,2);
            v+=sqr2
            document.getElementById("display").innerHTML+="<sup>2</sup>"
            if(op==0)
            {
                pq=0
            }

        }

    }
    function cube() {
        var cl=v
        de2=v
         de3=document.getElementById("display").innerHTML
        var ar1=Array.from(cl)
        var la1=ar1.length
        var en=0
        var sq="" 
        if(la1>0)
        {
            pq=1
            for(let i=la1-1;i>=0;i--)
            {
                if(ar1[i]=="*"||ar1[i]=="+"||ar1[i]=="-"||ar1[i]=="!"||ar1[i]=="/")
                {
                  en=i+1
                  break
                }
            }
            for(let i=en;i<la1;i++){
                sq+=ar1[i]
            }
            v=v.substring(0,en)
            sqr1=v
            sqr2=Math.pow(sq,3);
            v+=sqr2
            document.getElementById("display").innerHTML+="<sup>3</sup>"
            if(op==0)
            {
                pq=0
            }

        }

    }
    function del(){
        var de=document.getElementById("display").innerHTML
        var ar1=Array.from(de)
        var la1=ar1.length
        var ar2=Array.from(v)
        var la2=ar2.length
        if(ar1[la1-1]=="1"||ar1[la1-1]=="2"||ar1[la1-1]=="3"||ar1[la1-1]=="4"||ar1[la1-1]=="5"||ar1[la1-1]=="6"||ar1[la1-1]=="7"||ar1[la1-1]=="8"||ar1[la1-1]=="9"||ar1[la1-1]=="0"||ar1[la1-1]==".")
       {
        document.getElementById("display").innerHTML=de.substring(0,ar1.length-1)
        v=v.substring(0,ar2.length-1)
       }
       else if(ar1[la1-1]=="*"||ar1[la1-1]=="+"||ar1[la1-1]=="-"||ar1[la1-1]=="/")
       {
        document.getElementById("display").innerHTML=de.substring(0,ar1.length-1)
        v=v.substring(0,ar2.length-1)
       }
       else if(ar1[la1-1]=="(")
       {
           if(ad==1&&(ar1[la1-2]=="("||ar1[la1-2]=="0"||ar1[la1-2]=="1"||ar1[la1-2]=="2"||ar1[la1-2]=="3"||ar1[la1-2]=="4"||ar1[la1-2]=="5"||ar1[la1-2]=="6"||ar1[la1-2]=="7"||ar1[la1-2]=="8"||ar1[la1-2]=="9"))
           {
            document.getElementById("display").innerHTML=de.substring(0,ar1.length-1)
           }
           else
           if(op==1)
           {
            document.getElementById("display").innerHTML=de.substring(0,ar1.length-2)
            op=0
           }
           else
           if(op==2||op==3||op==4||op==5)
           {
           document.getElementById("display").innerHTML=de.substring(0,ar1.length-4)
           op=0
           }
           else 
           if(op==6)
           {
            document.getElementById("display").innerHTML=de.substring(0,ar1.length-17)
            op=0  
           }
           else
           if(op==100)
           {
            document.getElementById("display").innerHTML=de.substring(0,ar1.length-1)
            op=0
           }
           else
           document.getElementById("display").innerHTML=de.substring(0,ar1.length-1)
       }
       else if(ar1[la1-1]=="!")
       {
       var hi
       document.getElementById("display").innerHTML=de.substring(0,ar1.length-1)
       for(let i=la2-1;i>=0;i--)
       {          
           if(v[i]!="1"&&v[i]!="2"&&v[i]!="3"&&v[i]!="4"&&v[i]!="5"&&v[i]!="6"&&v[i]!="7"&&v[i]!="8"&&v[i]!="9"&&v[i]!="0")
           {
               hi=i;
               break;
           }
       }
       v=v.substring(0,hi+1)
       v+=sur
       }
       else if(ar1[la1-1]==")")
       {
       v=imp2
        imp=imp2 
        op=op2  
        document.getElementById("display").innerHTML=de.substring(0,ar1.length-1)
    }
    else if(ar1[la1-1]=="π")
    {
        document.getElementById("display").innerHTML=de.substring(0,ar1.length-1)
        v=imp
    }
    else 
    {
        v=de2
        imp=v
        if(op!=0){
            var ra=Array.from(v)
            var ra1=ra.length
            var re=Array.from(de3)
            var re1=re.length
            var re2=0
            for(let i=re1-1;i>=0;i--)
            {
                if(re[i]=="(")
                {
                    re2=i+1
                    break
                }
            }
            re2=re1-re2
            imp=v.substring(0,ra1-re2)
        }
        document.getElementById("display").innerHTML=de3
        pq=0
    }
    
        
    }
    function rad() {
        radi=1
        degr=0
        document.getElementById("radians").style.color = "aqua"
        document.getElementById("degree").style.color = "black"
    }
    function deg() {
        radi=0
        degr=1
        document.getElementById("degree").style.color = "aqua"
        document.getElementById("radians").style.color = "black"
    }
    function fun1() {
        document.getElementById("display").innerHTML+=1
        v+="1"
    }
    function ope() {
        imp=v
        document.getElementById("display").innerHTML+="("
        if(op!=0)
        {
            ad=1
        }
        else
        {
            ad2=1
            imp+="*"
            v+="*"
        }
    }
    function clos() {
        if(pq==0){
       var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       var t=0
       var t6=0
       for(let i=le-1;i>=0;i--)
       {
           if(cl[i]=="(")
           {
               t=i+1;
               t6=1
               break;
           }             
       }
       if(t6==1)
       {
       var st=""
       for(let i=t;i<le;i++)
       {
           if(cl[i]=="π")
           st+="22/7"
           else
           st+=cl[i]
       }
       st=eval(st)
        v=imp
        imp2=imp
        op2=op
       if(op==1)
       var b=Math.sqrt(st)
       else if(op==2)
       var b=Math.log(st)
       else if(op==3&&radi==1)
       var b=Math.sin(st)
       else if(op==3&&degr==1)
       {
       st=st*0.01745329252
       var b=Math.sin(st)
       }
       else if(op==4&&radi==1)
       var b=Math.cos(st)
       else if(op==4&&degr==1)
       {
       st=st*0.01745329252
       var b=Math.cos(st)
       }
       else if(op==5&&radi==1)
       var b=Math.tan(st)
       else if(op==5&&degr==1)
       {
       st=st*0.01745329252
       var b=Math.tan(st)
       }
       else if(op==6)
       var b=Math.log10(st)
       else if(ad2==1)
       var b=eval(st)
       v+=b
       op=0
       imp=""
       var st7=Array.from(v)
       var le8=st7.length
       for(let i=le8-1;i>0;i--)
       {
       if(st7[i]==st7[i-1]&&st7[i]=="-")
          {
              st7[i-1]="+"
              st7[i]=""
              break
          }         
       }
       v=""
       for(let i=0;i<=le8-1;i++)
       { 
           v+=st7[i]
       }     
       document.getElementById("display").innerHTML+=")"
       ad=0
       ad2=0
    }
}
    else if(pq==1)
    {
        var ut=Array.from(sqr2)
        var u4=ut.length
        var u9=0
        var yu=""
        op2=op
        for(let i=u4-1;i>=0;i--)
        {
             if(ut[i]=="*")
             {
                 u9=i+1
             }
        }
        for(let i=u9;i<ut;i++)
        {
              yu+=ut[i]
        }
        sqr2=eval(sqr2)
        if(op==1)
       var b=Math.sqrt(sqr2)
       else if(op==2)
       var b=Math.log(sqr2)
       else if(op==3&&radi==1)
       var b=Math.sin(sqr2)
       else if(op==3&&degr==1)
       {
       st=st*0.01745329252
       var b=Math.sin(sqr2)
       }
       else if(op==4&&radi==1)
       var b=Math.cos(sqr2)
       else if(op==4&&degr==1)
       {
       st=st*0.01745329252
       var b=Math.cos(sqr2)
       }
       else if(op==5&&radi==1)
       var b=Math.tan(sqr2)
       else if(op==5&&degr==1)
       {
       st=st*0.01745329252
       var b=Math.tan(sqr2)
       }
       else if(op==6)
       var b=Math.log10(sqr2)
       else if(ad2==1)
       var b=eval(sqr2)
       sqr1+=b
       v=sqr1
       imp2=sqr1
       op=0
       imp=""
       var st7=Array.from(v)
       var le8=st7.length
       for(let i=le8-1;i>0;i--)
       {
       if(st7[i]==st7[i-1]&&st7[i]=="-")
          {
              st7[i-1]="+"
              st7[i]=""
              break
          }
          
       }
       v=""
       for(let i=0;i<=le8-1;i++)
       {
           v+=st7[i]
       }
       document.getElementById("display").innerHTML+=")"
       ad=0
       ad2=0
       pq=0
    }
    }
    function sqrt() {
        imp=v
        op=1
        var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       if((le>0)&&(l[le-1]!="("&&l[le-1]!="*"&&l[le-1]!="-"&&l[le-1]!="+"&&l[le-1]!="/"))
       {
          imp+="*"
       }
        document.getElementById("display").innerHTML+="√("
    }
    function log() {
        imp=v
        op=2
        var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       if((le>0)&&(l[le-1]!="("&&l[le-1]!="*"&&l[le-1]!="-"&&l[le-1]!="+"&&l[le-1]!="/"))
       {
          imp+="*"
          v+="*"
       }
        document.getElementById("display").innerHTML+="log("
    }
    function log1() {
        imp=v
        op=6
        var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       if((le>0)&&(l[le-1]!="("&&l[le-1]!="*"&&l[le-1]!="-"&&l[le-1]!="+"&&l[le-1]!="/"))
       {
          imp+="*"
          v+="*"
       }
        document.getElementById("display").innerHTML+="log<sub>10</sub>("
    }
    function sine() {
        imp=v
        op=3
        //var st=Array.from(v)
        //var le2=st.length
        //if(le2>0&&st[le-1]!="*"&&st[le2-1]!="/"&&st[le2-1]!="-"&&st[le2-1]!="+")
        //{
         //   imp+="*"
        //}
        //else{
        var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       if((le>0&&l[le-1]!="("&&l[le-1]!="*"&&l[le-1]!="-"&&l[le-1]!="+"&&l[le-1]!="/")||l[le-1]==">")
       {
          imp+="*"
          v+="*"
       }
    //}
        document.getElementById("display").innerHTML+="sin("
    
    }
    function cosine() {
        imp=v
        op=4
        var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       if((le>0)&&(l[le-1]!="("&&l[le-1]!="*"&&l[le-1]!="-"&&l[le-1]!="+"&&l[le-1]!="/"))
       {
          imp+="*"
          v+="*"
       }
        document.getElementById("display").innerHTML+="cos("
    }
    function tangent() {
        imp=v
        op=5
        var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       if((le>0)&&(l[le-1]!="("&&l[le-1]!="*"&&l[le-1]!="-"&&l[le-1]!="+"&&l[le-1]!="/"))
       {
          imp+="*"
          v+="*"
       }
        document.getElementById("display").innerHTML+="tan("
    }
    function pi() {
        var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
        if(op!=0)
        v+="22/7"
        else if(le==0)
        v="3.142"
        else if(l[le-1]=="1"||l[le-1]=="2"||l[le-1]=="3"||l[le-1]=="4"||l[le-1]=="5"||l[le-1]=="6"||l[le-1]=="7"||l[le-1]=="8"||l[le-1]=="9"||l[le-1]=="0"||l[le-1]=="!")
        v+="*3.142"
        else
        v+="3.142"
        document.getElementById("display").innerHTML+="π"
        
    }
    function fun2() {
        document.getElementById("display").innerHTML+=2
        v+="2"
    }
    function fun3() {
        document.getElementById("display").innerHTML+=3
        v+="3"
    }
    function fact(){
        var cl=v
        var mi=document.getElementById("display").innerHTML
        var cl=Array.from(cl)
        var mi=Array.from(mi)
        var me=mi.length
       var le=cl.length
       var t=0
       if(mi[me-1]=="!")
       {

       }
       else
       {
       for(let i=le-1;i>=0;i--)
       { 
           if(cl[i]!="1"&&cl[i]!="2"&&cl[i]!="3"&&cl[i]!="4"&&cl[i]!="5"&&cl[i]!="6"&&cl[i]!="7"&&cl[i]!="8"&&cl[i]!="9"&&cl[i]!="0")
           {
               t=i+1;
               break;
           }
       }
       var st=""
       for(let i=t;i<le;i++)
       {
           st+=cl[i]
       }
       v=""
       for(let i=0;i<t;i++)
       {
           v+=cl[i]
       }
       sur=st
       var a=parseInt(st)
       var fact=1
       while(a>0)
       {
         fact=fact*a
         a=a-1
       }
       v+=fact
       document.getElementById("display").innerHTML+="!"
    }
    }
    function fun4() {
        document.getElementById("display").innerHTML+=4
        v+="4"
    }
    function fun5() {
        document.getElementById("display").innerHTML+=5
        v+="5"
    }
    function fun6() {
        document.getElementById("display").innerHTML+=6
        v+="6"
    }
    function fun7() {
        
        document.getElementById("display").innerHTML+=7
        v+="7"
        
    }
    
    function fun8() {
        document.getElementById("display").innerHTML+=8
        v+="8"
    }
    function fun9() {
        document.getElementById("display").innerHTML+=9
        v+="9"
        
    }
    function fun0() {
        document.getElementById("display").innerHTML+=0
        v+="0"
    }
    function fundec() {
        document.getElementById("display").innerHTML+="."
        v+="."
    }

    function funAC() {
        document.getElementById("display").innerHTML=""
        v=""
        
    }
    //var x
    function funplus(){
         //x = parseFloat(document.getElementById("display").innerHTML);
        //action=1
        document.getElementById("display").innerHTML+="+"
        v+="+"
    
    }
    function funminus(){
         //x = parseFloat(document.getElementById("display").innerHTML);
        //action=2
        document.getElementById("display").innerHTML+="-"
        v+="-"
    }
    function funmultiply(){
         //x = parseFloat(document.getElementById("display").innerHTML);
         //action=3
         var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       if(l[le-1]!="*"&&l[le-1]!="/")
       {
        document.getElementById("display").innerHTML+="*"
        v+="*"
       }
    }
    function fundivide(){
         //x = parseFloat(document.getElementById("display").innerHTML);
         //action=4
         var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       if(l[le-1]!="*"&&l[le-1]!="/")
       {
        document.getElementById("display").innerHTML+="/"
        v+="/"
       }
    }
    function funequal(){
        //y = parseFloat(document.getElementById("display").innerHTML);
        /*if(action==1)
        {
            var z=x+y;
        }
        else if(action==2){
            var z=x-y;
        }
        else if(action==3){
            var z=x*y;
        }
        else if(action==4){
            var z=x/y;
        }*/
        if(op!=0)
        {
       var cl=document.getElementById("display").innerHTML
       var l=Array.from(cl);
       var le=l.length
       var t=0
       for(let i=le-1;i>=0;i--)
       {
           if(cl[i]=="(")
           {
               t=i+1;
               break;
           }
       }
       var st=""
       for(let i=t;i<le;i++)
       {
           if(cl[i]=="π")
           st+="22/7"
           else
           st+=cl[i]
       }
       st=eval(st)
        v=imp
       if(op==1)
       var b=Math.sqrt(st)
       else if(op==2)
       var b=Math.log(st)
       else if(op==3&&radi==1)
       var b=Math.sin(st)
       else if(op==3&&degr==1)
       {
       st=st*0.01745329252
       var b=Math.sin(st)
       }
       else if(op==4&&radi==1)
       var b=Math.cos(st)
       else if(op==4&&degr==1)
       {
       st=st*0.01745329252
       var b=Math.sin(st)
       }
       else if(op==5&&radi==1)
       var b=Math.tan(st)
       else if(op==5&&degr==1)
       {
       st=st*0.01745329252
       var b=Math.sin(st)
       }
       else if(op==100)
       var b=eval(st)
       else if(op==6)
       var b=Math.log10(st)
       v+=b
       op=0
       var st7=Array.from(v)
       var le8=st7.length
       for(let i=le8-1;i>0;i--)
       {
       if(st7[i]==st7[i-1]&&st7[i]=="-")
          {
              st7[i-1]="+"
              st7[i]=""
              break
          }          
       }
       v=""
       for(let i=0;i<=le8-1;i++)
       {
           v+=st7[i]
       }
       ad=0
       ad2=0
        }
  document.getElementById("display").innerHTML=eval(v)
        v=document.getElementById("display").innerHTML
        imp=""
        //document.getElementById("display").innerHTML=z
//}
    }


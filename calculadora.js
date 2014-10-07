$(function(){
    var a, o;
    a=0.0;
    var i = 0;
    var abreparenteses = false;
    
    $('.calculadora').draggable();
    
    $('.calculadora').dblclick(function(){
        $(this).hide();
    });
    
    $('.numerico').click(function(){
        
        var val = $('.display').attr('value');
        //
        var vale = $('.display_escondido').attr('value');
        
        //if(val != "0" && val != "ERRO DE SINTAXE!"){
            $('.display').attr('value', val+this.value);
        //}else{
        //    $('.display').attr('value', this.value);
        //    $(".ans").text("Answer");
        //}
        var val2 = $('.display').attr('value');
        
        $('.display_escondido').attr('value', vale+this.value.replace(',','.'));
        //
        //$('.display_escondido').attr('value', vale+this.value.replace(',','.'));
        //
    });
    
    $('.operacao').click(function(){
        var v = $('.display').attr('value').replace(',','.');
        
        $('.display').attr('value', '');
        //
        var vale = $('.display_escondido').attr('value');
        
        switch(this.value){
            case "sqrt":
                if(abreparenteses){
                    vale = vale+")";
                }
                $('.display_escondido').attr('value', vale.slice(0,/**/vale.length-v.length)+"Math.sqrt("+v+")");
                $('.igual').trigger("click");
                break;
            case "^":
                if(abreparenteses){
                    vale = vale+")";
                }
                $('.display_escondido').attr('value', vale.slice(0,/**/vale.length-v.length)+"Math.pow("+v+",");
                abreparenteses = true;
                //$('.igual').trigger("click");
                break;
            default:
                if(abreparenteses){
                    vale = vale+")";
                }
                $('.display_escondido').attr('value', vale+this.value);
                //$('.display_escondido').attr('value', vale+v+this.value);
                //
        }
        $(".ans").text("Ans = "+vale.replace('.',','));
    });

    $('.AC').click(function(){
        $('.display').attr('value', "");
        $('.display_escondido').attr("value", "");
        a = 0;
        o = undefined;
        $(".ans").text("Answer");
    });
    
    $('.igual').click(function(){
        var v = $(".display_escondido").attr("value");
        if(abreparenteses){
                //vale = vale+")";
            }
        
        if(v != ''){ 
        
            $(".ans").text("Ans = "+String(v).replace('.',','));
            try{
                //$('.display').attr('value', String(eval($(".display_escondido").attr("value"))).replace('.',','));
                $('.display').attr('value', String(eval(v)).replace('.',','));
                $(".display_escondido").attr("value", eval(v));
            }catch(erro){
                $('.display').attr('value', "ERRO DE SINTAXE!");
                $(".display_escondido").attr("value", "");
            }
        
            //$(".ans").text("Ans = "+String(a));
        }else{
            $('.display').attr('value', 0);
        }
    });
    
    $('.backspace').click(function(){
        
        str = $('.display').attr('value');
        
        variavel = str.substring(0,(str.length - 1));
        
        $('.display').attr('value', variavel);
        
        str2 = $('.display_escondido').attr('value');
        
        variavel = str2.substring(0,(str2.length - 1));
        
        $('.display_escondido').attr('value', variavel);
    });

});
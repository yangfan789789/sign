$(function() {
    var $use = $('#use'),//获取内容
        $iphone = $('#iphone'),
        $pass = $('#pass'),
        $masge = $('#masge'),

        $signGet = $('#sign-get'),//获取验证码
        $sign = $('#sign'),//注册
        
        

        $useValidate = $('#use-validate'),//提示区域
        $iphoneValidate = $('#iphone-validate'),
        $passValidate = $('#pass-validate'),
        $masgeValidate = $('#masge-validate'),

        PassStateUse = false;
        PassStateIphone = false;
        PassStatePass = false;
        PassStateMasge = false;
  



    $use.focusout(function() {
        var result = validateUse($use.val());
        PassStateUse = result.state;
        if(!result.state) {
            $useValidate.html(result.reason);
        } else {
            $useValidate.html('');
        }
    });

   $iphone.focusout(function() {
      var result = validateIphone($iphone.val());
      PassStateIphone = result.state;
      if(!result.state) {
        $iphoneValidate.html(result.reason);
      } else {
        $iphoneValidate.html('');
      }
    });

    $pass.focusout(function() {
        var result = validatePass($pass.val());
        PassStatePass = result.state;
        if(!result.state) {
          $passValidate.html(result.reason);
        } else {
          $passValidate.html('');
        }
    });

    $masge.focusout(function() {
        var result = validateMasge($masge.val());
        PassStateMasge = result.state;
        if(!result.state) {
          $masgeValidate.html(result.reason);
        } else {
          $masgeValidate.html('');
        }
    });

    var countdown=60;  //初始值
    $signGet.click(function(val){
        console.log(val.target);
            if (countdown == 0) {
                val.target.removeAttribute("disabled");
                val.target.value="获取验证码";
                countdown = 60;                     
                return false;
            } else {
                val.target.setAttribute("disabled", true);
                val.target.value="重新发送(" + countdown + ")";
                countdown--;
            }
            setTimeout(function() {
                $signGet.click();
            },1000);
        }
    );

    $sign.click(function(val){
        if(!PassStateUse||!PassStateIphone||!PassStatePass||!PassStateMasge) return;
        alert('你真牛逼');
        window.location.reload();
    })








    //检验
    function validateUse(data) {
        var result = {
            state: false,
            reason: ''
        };

        if(data === '') {
            result.reason = '用户名不能为空！';
            return result;
        }

        if(!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(data)) {
            result.reason = '用户名仅支持中英文，数字和下划线，且不能为纯数字';
            return result;
        }

        if(!/^[a-zA-Z0-9_]{0,14}$|^[\u4e00-\u9fa5]{0,7}$/.test(data)) {
            result.reason = '用户名不能超过7个汉字或14个字符';
            return result;
        }

        if(/^[0-9]*$/.test(data)) {
            result.reason = '用户名仅支持中英文，数字和下划线，且不能为纯数字';
            return result;
        }

        result.state = true;
        return result;
    }


    function validateIphone(data) {
        var result = {
            state: false,
            reason: ''
        };

        if(data === '') {
            result.reason = '手机号不能为空！';
            return result;
        }

        if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(data)) {
            result.reason = '手机号格式不正确！';
            return result;
        }

        result.state = true;
        return result;
    }



    function validatePass(data) {
        var result = {
            state: false,
            reason: ''
        };

        if(data === '') {
            result.reason = '密码不能为空！';
            return result;
        }
        if(!/^[a-zA-Z0-9_]{8,14}$/.test(data)) {
            result.reason = '密码设置不符合要求';
            return result;
        }

        result.state = true;
        return result;
    }




    function validateMasge(data) {
        var result = {
            state: false,
            reason: ''
        };

        if(data === '') {
            result.reason = '验证码不正确！';
            return result;
        }

        result.state = true;
        return result;
    }

})


var SH = window.SH || {};
SH.slack = function(){
  var clientId = '2217325649.7640390854';
  var secret = 'ac2d9d3a8aae5e7fc6ee44c37d68d8ae';

  function init(){
    var token = localStorage.getItem('slack_token');
    if(!token){
      checkCode();
      return false;
    }

    getChannels();
  }

  function checkCode(){
    var urlParams = _.object(_.compact(_.map(location.search.slice(1).split('&'), function(item) {  
          if (item) return item.split('='); 
        })));
    var code = urlParams.code;

    if(code){
      getToken(code);
    } else {
      window.location = 'https://slack.com/oauth/authorize?client_id=' + clientId;
    }
  }

  function getToken(code){
    $.ajax({
      url: 'https://slack.com/api/oauth.access',
      data: {
        client_id: clientId,
        client_secret: secret,
        code: code
      },
      success: function(data){
        localStorage.setItem('slack_token', data.access_token);
      }
    });
  }

  function getChannels(){
    slackApi('channels.list', {
      success: function(data){
        data.channels.forEach(function(channel){
          console.log(channel.name);
        });
      }
    });
  }

  return {
    init: init
  }
}();
var SH = window.SH || {};
SH.slackEvents = function(){
  function init(){
    getChannels();
  }

  function getChannels(){
    slackApi('channels.list', {
      success: function(data){
        bh('channels').append(SH.templates.channels(data));
      }
    });
  }

  return {
    init: init
  }
}();
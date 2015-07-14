function slackApi(action, options){
  $.ajax({
    url: 'https://slack.com/api/' + action,
    data: {
      token: localStorage.getItem('slack_token')
    },
    success: function(data){
      options.success(data);
    }
  });
}
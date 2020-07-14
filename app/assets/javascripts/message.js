$(function(){
  function buildHTML(message){
    if (message.image){
      let html = 
      `<div class="main">
        <div class="main_message">
          <div class="main_message__name">
            ${message.user_name}
          </div>
          <div class="main_message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Content">
          <p class="Content__content">
            ${message.content}
          </p>
          <img class="Message__image" src= "${message.image}">
        </div>
      </div>`
    return html;
    }else {
      let html =
      `<div class="main">
        <div class="main_message">
          <div class="main_message__name">
            ${message.user_name}
          </div>
          <div class="main_message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Content">
          <p class="Content__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }
  

  $('.Form').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      console.log(data)
      let html = buildHTML(data);
      $('.main_chat__message-list').append(html);
      // $('#message_content').val('');
      $('Form')[0].reset();
      $('.main_chat__message-list').animate({ scrollTop: $('.main_chat__message-list')[0].scrollHeight});
      $('#commit').prop("disabled", false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  });
});



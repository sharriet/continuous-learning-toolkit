$('#ModalLong').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var title = button.data('element').title // Extract info from data-* attributes
    var desc = button.data('element').description
    var links = button.data('element').links
    var listItems = ""
    $.each( links, function( key, value ) {
      listItems += "<li><a href='"+value+"'>"+value+"</a></li>"
    });
    var modal = $(this)
    modal.find('.modal-title').text(title)
    modal.find('.modal-text').text(desc)
    modal.find('.modal-list').html(listItems)
  })
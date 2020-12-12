// Dropdown hamburger button
function bodyCssChange() {
    if ($(window).width() < 720) {
        if($('.header-main .navbar-collapse').hasClass('show')) {
            $('body').css({'overflow':'auto'})
        } else {
            $('body').css({'overflow':'hidden'})
        }
    }
}
// Dropdown hamburger button.

// Validation form
window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
}, false);
// Validation form.

// Attach file
function readFile(input) {
  if (input.files && input.files[0]) {
  var reader = new FileReader();

  reader.onload = function (e) {
  var htmlPreview = 
  '<img width="200" src="' + e.target.result + '" />'+
  '<p>' + input.files[0].name + '</p>';
  var wrapperZone = $(input).parent();
  var previewZone = $(input).parent().parent().find('.preview-zone');
  var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');

  wrapperZone.removeClass('dragover');
  previewZone.removeClass('hidden');
  boxZone.empty();
  boxZone.append(htmlPreview);
  };

  reader.readAsDataURL(input.files[0]);
  }
 }
 function reset(e) {
  e.wrap('<form>').closest('form').get(0).reset();
  e.unwrap();
 }
 $(".dropzone").change(function(){
  readFile(this);
 });
 $('.dropzone-wrapper').on('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).addClass('dragover');
 });
 $('.dropzone-wrapper').on('dragleave', function(e) {
  e.preventDefault();
  e.stopPropagation();
  $(this).removeClass('dragover');
 });
 $('.remove-preview').on('click', function() {
  var boxZone = $(this).parents('.preview-zone').find('.box-body');
  var previewZone = $(this).parents('.preview-zone');
  var dropzone = $(this).parents('.form-group').find('.dropzone');
  boxZone.empty();
  previewZone.addClass('hidden');
  reset(dropzone);
 });
 // Attach file.

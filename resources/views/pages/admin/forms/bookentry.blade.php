<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Tiny, opensource, Bootstrap WYSIWYG rich text editor from MindMup</title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<link href="external/google-code-prettify/prettify.css" rel="stylesheet">
	<link href="http://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" rel="stylesheet">
	<script src="../../js/jquery.js"></script>
	<link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.2/summernote.css" rel="stylesheet">
	<script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.2/summernote.js"></script>
	<script src="external/jquery.hotkeys.js"></script>
	<link crossorigin="anonymous" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" rel=
	"stylesheet">
	<script crossorigin="anonymous" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js">
	</script>
	<link href="../../css/wysiwyg.css" rel="stylesheet">
	<script src="../../js/wysiwyg.js">
	</script>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/css/bootstrap-select.min.css" rel="stylesheet">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.11.2/js/bootstrap-select.min.js">
	</script>
	<script>
		var markupStr = $('#summernote').summernote('code');
	</script>
</head>
<body>
	<div class="container">
		<div class="pull-right"></div>
		<form id="book-entry-form" name="book-entry-form" role="form" method="post" action="submit" enctype="multipart/form-data" onsubmit="return postForm()"> <!-- SOURCE: http://stackoverflow.com/questions/22632741/bootstrap-wysiwyg-master-post-to-php -->
			<textarea name="form-book-description" style="display:none;"></textarea> <!-- Hidden Field to Capture WYSIWYG Data -->
			<div class="form-group">
				<label for="form-book-title">Book Title</label> <input name="form-book-title" class="form-control" id="form-book-title" placeholder="Enter Book Title Here" type="text">
			</div>
			<div class="form-group">
				<label for="form-book-author">Book Author</label> <input name="form-book-author" class="form-control" id="form-book-author" placeholder="Enter Book Author Here" type="text">
			</div>
			<div class="form-group">
				<label for="form-book-topic">Book Topic</label> <select name="form-book-topic" class="selectpicker" data-live-search="true">
					<option data-tokens="rosicrucian">
						Rosicrucian
					</option>
					<option data-tokens="christianity">
						Christianity
					</option>
					<option data-tokens="frosting">
						Yummy Frosting
					</option>
				</select>
			</div>

			<h2>POST DATA</h2>
			<pre>
			<?php print_r($_POST); ?>
			</pre>
			<pre>
			</pre>
			<textarea class="input-block-level" id="summernote" name="content" rows="18">
					</textarea>
			<div class="form-group">
				<label for="form-book-description">Book Description</label>
				<textarea class="input-block-level" id="summernote" name="content" rows="18"></textarea>
				 <div id="summernote"><p></p></div>
					<script>
						$(document).ready(function() {
							$('#summernote').summernote(
								{
									height: 300,
								}
							);
						});
						var postForm = function() {
							var content = $('textarea[name="content"]').html($('#summernote').code());
						}
					</script>
			</div>
			<div class="form-group">
				<label for="form-book-cover">Book Cover</label> <input id="form-book-cover" type="file">
				<p class="help-block">Upload your book cover here!</p>
			</div><button class="btn btn-default" type="submit">Submit</button>
			<input type="hidden" name="_token" value="{{ csrf_token() }}">
		</form>
	</div>
	<script>
	    $(function(){
	      function initToolbarBootstrapBindings() {
	        var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
	              'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
	              'Times New Roman', 'Verdana'],
	              fontTarget = $('[title=Font]').siblings('.dropdown-menu');
	        $.each(fonts, function (idx, fontName) {
	            fontTarget.append($('<li><a data-edit="fontName ' + fontName +'" style="font-family:\''+ fontName +'\'">'+fontName + '<\/a><\/li>'));
	        });
	        $('a[title]').tooltip({container:'body'});
	          $('.dropdown-menu input').click(function() {return false;})
	              .change(function () {$(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');})
	          .keydown('esc', function () {this.value='';$(this).change();});

	        $('[data-role=magic-overlay]').each(function () {
	          var overlay = $(this), target = $(overlay.data('target'));
	          overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
	        });
	        if ("onwebkitspeechchange"  in document.createElement("input")) {
	          var editorOffset = $('#editor').offset();
	          $('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+$('#editor').innerWidth()-35});
	        } else {
	          $('#voiceBtn').hide();
	        }
	      };
	      function showErrorAlert (reason, detail) {
	          var msg='';
	          if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
	          else {
	              console.log("error uploading file", reason, detail);
	          }
	          $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;<\/button>'+
	           '<strong>File upload error<\/strong> '+msg+' <\/div>').prependTo('#alerts');
	      };
	      initToolbarBootstrapBindings();
	      $('#editor').wysiwyg({ fileUploadError: showErrorAlert} );
	      window.prettyPrint && prettyPrint();
	    });
	</script>
</body>
</html>

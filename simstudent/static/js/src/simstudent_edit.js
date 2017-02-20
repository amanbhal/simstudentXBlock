/* Javascript for simstudentXBlock. */
function simstudentXBlock(runtime, element) {

    $(element).find('.cancel-button').bind('click', function() {
        runtime.notify('cancel', {});
    });

	//$('.save-button',element).click(function(eventObject){
	$(element).find('.save-button').bind('click', function(){
		var brd_name = $(edit_name).context.value;
		var complete_url = "http://localhost:8080/SimStudentServlet/tutor.html?BRD=http%3A%2F%2Flocalhost%3A8080%2FSimStudentServlet%2F"+brd_name+"&ARG=-traceOn+-folder+informallogic+-problem+if_p_or_q_then_r+-ssTypeChecker+informallogic.MyFeaturePredicate.valueTypeChecker&CSS=&INFO=&BRMODE=AuthorTimeTutoring&AUTORUN=on&KEYBOARDGROUP=Disabled&BACKDIR=http%3A%2F%2Flocalhost%3A8080%2FSimStudentServlet%2Fbuild%2Fclasses&BACKENTRY=interaction.ModelTracerBackend&PROBLEM=xxx&DATASET=FlashLoggingTest_xxx&LEVEL1=Unit1&TYPE1=unit&USER=qa-test&GENERATED=on&SOURCE=PACT_CTAT_HTML5&USEOLI=false&SLOG=true&LOGTYPE=None&DISKDIR=.&PORT=4000&REMOTEURL=serv&SKILLS=&VAR1=xxx_xxx&VAL1=xxx&VAR2=xxx_xxx&VAL2=xxx&VAR3=xxx_xxx&VAL3=xxx&VAR4=xxx_xxx&VAL4=xxx&submit=Launch+HTML5+Tutor";

		var data = {'href':complete_url };
		
		$('.xblock-editor-error-message', element).html();
        	$('.xblock-editor-error-message', element).css('display', 'none');
		
		var handlerUrl = runtime.handlerUrl(element,'save_simstudent');

		runtime.notify('save', {state: 'start'});
	        $.post(handlerUrl, JSON.stringify(data)).done(function(response){
			runtime.notify('save', {state: 'end'});
	        });

        // $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
        //     if (response.result === 'success') {
        //         window.location.reload(false);
        //     } else {
        //         $('.xblock-editor-error-message', element).html('Error: '+response.message);
        //         $('.xblock-editor-error-message', element).css('display', 'block');
        //     }
        // });

	});
}

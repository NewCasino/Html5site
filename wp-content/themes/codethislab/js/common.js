var _oLoadingDialog = null;

function showLoading( szTitle ){

    if(_oLoadingDialog){
        _oLoadingDialog.setTitle(szTitle);
        return;
    }

    var $textAndPic = $('<div class="ctl-align-center"></div>');
    $textAndPic.append('<img src="./images/loading.gif" />');

    _oLoadingDialog = new BootstrapDialog({
        message: $textAndPic,
        closable: false,
        autodestroy: true,
        title : szTitle,
        size: BootstrapDialog.SIZE_SMALL
    });
    _oLoadingDialog.open();

}

function hideLoading(){
    if(_oLoadingDialog){
        _oLoadingDialog.close();
        _oLoadingDialog = null;
    }
}

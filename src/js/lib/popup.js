// class Popup {
//     constructor() {
//       this.$popups = $('.'+Popup.classNames.target);
//     };
  
//     init() {
//       this._detectTouch();
//       this._openPopup();
//       this._closePopup();    
//     };
  
//     destroy() {
//       this._destroy();
//     };
  
//     get isTouch() {
//       return 'ontouchstart' in window || navigator.maxTouchPoints;
//     };
  
//     openFunc(e) {
//       e.preventDefault();
//       const $target = $(e.currentTarget);
//       const openData = $target.data('popup-target');
//       const $popup = $('.'+Popup.classNames.target+'[data-popup="'+openData+'"]');
//       const $openedPopups = $('.'+Popup.classNames.target+':not([data-popup="' + openData + '"])');
//       if ($(e.target).closest('.'+Popup.classNames.btnInOpen).length > 0) return;
  
//       $openedPopups.removeClass(Popup.classNames.active);
//       $popup.addClass(Popup.classNames.active);
//       $('body').addClass(Popup.classNames.noScroll);
  
//       if (this.onOpen) {
//         this.onOpen($target[0], $popup[0]);
//       };   
//     };
  
//     closeFunc(e) { 
//       const $popup = $(e.currentTarget);
//       const $close = $(e.target).closest('.'+Popup.classNames.close);
  
//       if ($popup.has(e.target).length === 0 || $close.length > 0) {
//         e.preventDefault();
//         $popup.removeClass(Popup.classNames.active);
//         $('body').removeClass(Popup.classNames.noScroll);
  
//         if (this.onClose) {
//           const btn = $('.'+Popup.classNames.open+'[data-popup-target="'+$popup.data('popup')+'"]')[0];
//           this.onClose(btn, $popup[0]);
//         };
//       };    
//     };
  
//     _detectTouch() {
//       if (this.isTouch) {
//         $('html').addClass(Popup.classNames.isTouch);
//       };
//     };
    
//     _openPopup() {
//       this.openFuncBind = this.openFunc.bind(this);
//       $(document).on('click', '.'+Popup.classNames.open, this.openFuncBind);
//     };
  
//     _closePopup() {
//       this.closeFuncBind = this.closeFunc.bind(this);
//       $(document).on('click', '.'+Popup.classNames.target, this.closeFuncBind);
//     };
  
//     _destroy() {
//       $(document).off('click', '.'+Popup.classNames.open, this.openFuncBind);
//       $(document).off('click', '.'+Popup.classNames.target, this.closeFuncBind);
  
//       this.$popups.removeClass(Popup.classNames.active);
//       $('body').removeClass(Popup.classNames.noScroll);
//     };
//   };
  
//   Popup.classNames = {
//     open: 'js-popup-open',
//     target: 'js-popup',
//     close: 'js-popup-close',
//     active: 'is-active',
//     noScroll: 'no-scroll',
//     isTouch: 'is-touch',
//     btnInOpen: 'js-btn-in-popup-open'
//   };
  
//   module.exports = Popup;
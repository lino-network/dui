var dInput = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.type!='textarea')?_c('input',{attrs:{"type":_vm.type}}):_c('textarea',{attrs:{"name":"","id":"","cols":"30","rows":"10"}})])},
staticRenderFns: [],
    name: 'dInput',
    props:{
        type:{
            type:String,
            defaulf:'text'
        }
    }
};

dInput.install=function(Vue){
    Vue.component(dInput.name,dInput);
};

export default dInput;
//# sourceMappingURL=index.js.map

var colorPicker = {
render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"colorPicker",staticClass:"m-colorPicker",attrs:{"tabindex":"-1"},on:{"blur":function($event){return _vm.closePanel()},"click":function (event) { event.stopPropagation(); }}},[_c('div',{staticClass:"colorBtn",class:{ disabled: _vm.disabled },style:(("background-color: " + _vm.showColor)),on:{"click":function($event){_vm.openStatus = !_vm.disabled;}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.html5Color),expression:"html5Color"}],ref:"html5Color",attrs:{"type":"color"},domProps:{"value":(_vm.html5Color)},on:{"change":function($event){return _vm.updataValue(_vm.html5Color)},"input":function($event){if($event.target.composing){ return; }_vm.html5Color=$event.target.value;}}}),_vm._v(" "),_c('div',{staticClass:"box",class:{ open: _vm.openStatus }},[_c('div',{staticClass:"hd"},[_c('div',{staticClass:"colorView",style:(("background-color: " + _vm.showPanelColor))}),_vm._v(" "),_c('div',{staticClass:"defaultColor",on:{"click":_vm.handleDefaultColor,"mouseover":function($event){_vm.hoveColor = _vm.defaultColor;},"mouseout":function($event){_vm.hoveColor = null;}}},[_vm._v("默认颜色")])]),_vm._v(" "),_c('div',{staticClass:"bd"},[_c('h3',[_vm._v("主题颜色")]),_vm._v(" "),_c('ul',{staticClass:"tColor"},_vm._l((_vm.tColor),function(color,index){return _c('li',{key:index,style:({ backgroundColor: color }),on:{"mouseover":function($event){_vm.hoveColor = color;},"mouseout":function($event){_vm.hoveColor = null;},"click":function($event){return _vm.updataValue(color)}}})}),0),_vm._v(" "),_c('ul',{staticClass:"bColor"},_vm._l((_vm.colorPanel),function(item,index){return _c('li',{key:index},[_c('ul',_vm._l((item),function(color,cindex){return _c('li',{key:cindex,style:({ backgroundColor: color }),on:{"mouseover":function($event){_vm.hoveColor = color;},"mouseout":function($event){_vm.hoveColor = null;},"click":function($event){return _vm.updataValue(color)}}})}),0)])}),0),_vm._v(" "),_c('h3',[_vm._v("标准颜色")]),_vm._v(" "),_c('ul',{staticClass:"tColor"},_vm._l((_vm.bColor),function(color,index){return _c('li',{key:index,style:({ backgroundColor: color }),on:{"mouseover":function($event){_vm.hoveColor = color;},"mouseout":function($event){_vm.hoveColor = null;},"click":function($event){return _vm.updataValue(color)}}})}),0),_vm._v(" "),_c('h3',{on:{"click":_vm.triggerHtml5Color}},[_vm._v("更多颜色...")])])])])},
staticRenderFns: [],
  name: 'colorPicker',
  props: {
    // 当前颜色值
    value: {
      type: String,
      required: true
    },
    // 默认颜色
    defaultColor: {
      type: String,
      default: '#000000'
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 面板打开状态
      openStatus: false,
      // 鼠标经过的颜色块
      hoveColor: null,
      // 主题颜色
      tColor: ['#000000', '#ffffff', '#eeece1', '#1e497b', '#4e81bb', '#e2534d', '#9aba60', '#8165a0', '#47acc5', '#f9974c'],
      // 颜色面板
      colorConfig: [
        ['#7f7f7f', '#f2f2f2'],
        ['#0d0d0d', '#808080'],
        ['#1c1a10', '#ddd8c3'],
        ['#0e243d', '#c6d9f0'],
        ['#233f5e', '#dae5f0'],
        ['#632623', '#f2dbdb'],
        ['#4d602c', '#eaf1de'],
        ['#3f3150', '#e6e0ec'],
        ['#1e5867', '#d9eef3'],
        ['#99490f', '#fee9da']
      ],
      // 标准颜色
      bColor: ['#c21401', '#ff1e02', '#ffc12a', '#ffff3a', '#90cf5b', '#00af57', '#00afee', '#0071be', '#00215f', '#72349d'],
      html5Color: this.value
    }
  },
  computed: {
    // 显示面板颜色
    showPanelColor () {
      if (this.hoveColor) {
        return this.hoveColor
      } else {
        return this.showColor
      }
    },
    // 显示颜色
    showColor () {
      if (this.value) {
        return this.value
      } else {
        return this.defaultColor
      }
    },
    // 颜色面板
    colorPanel () {
      let colorArr = [];
      for (let color of this.colorConfig) {
        colorArr.push(this.gradient(color[1], color[0], 5));
      }
      return colorArr
    }
  },
  methods: {
    closePanel() {
      this.openStatus = false;
    },
    triggerHtml5Color () {
      this.$refs.html5Color.click();
    },
    // 更新组件的值 value
    updataValue (value) {
      this.$emit('input', value);
      this.$emit('change', value);
      this.openStatus = false;
    },
    // 设置默认颜色
    handleDefaultColor () {
      this.updataValue(this.defaultColor);
    },
    // 格式化 hex 颜色值
    parseColor (hexStr) {
      if (hexStr.length === 4) {
        hexStr = '#' + hexStr[1] + hexStr[1] + hexStr[2] + hexStr[2] + hexStr[3] + hexStr[3];
      } else {
        return hexStr
      }
    },
    // RGB 颜色 转 HEX 颜色
    rgbToHex (r, g, b) {
      let hex = ((r << 16) | (g << 8) | b).toString(16);
      return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
    },
    // HEX 转 RGB 颜色
    hexToRgb (hex) {
      hex = this.parseColor(hex);
      let rgb = [];
      for (let i = 1; i < 7; i += 2) {
        rgb.push(parseInt('0x' + hex.slice(i, i + 2)));
      }
      return rgb
    },
    // 计算渐变过渡颜色
    gradient (startColor, endColor, step) {
      // 讲 hex 转换为 rgb
      let sColor = this.hexToRgb(startColor);
      let eColor = this.hexToRgb(endColor);

      // 计算R\G\B每一步的差值
      let rStep = (eColor[0] - sColor[0]) / step;
      let gStep = (eColor[1] - sColor[1]) / step;
      let bStep = (eColor[2] - sColor[2]) / step;

      let gradientColorArr = [];
      // 计算每一步的hex值
      for (let i = 0; i < step; i++) {
        gradientColorArr.push(this.rgbToHex(parseInt(rStep * i + sColor[0]), parseInt(gStep * i + sColor[1]), parseInt(bStep * i + sColor[2])));
      }
      return gradientColorArr
    }
  }
};

// 导入组件

// 为组件提供 install 安装方法，供按需引入
colorPicker.install = function (Vue) {
  Vue.component(colorPicker.name, colorPicker);
};

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

// 导入颜色选择器组件

// 存储组件列表
const components = [
  colorPicker,dInput
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  colorPicker,
  dInput
};

export default index;
//# sourceMappingURL=index.js.map

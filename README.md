<p align="center">
	<img src="vue-ace.png" />
</p>

**Install**
```
npm install --save ace-builds @aminoeditor/vue-ace
```

**Add to vue**
*main.js*
```
import Vue from 'vue';
import VueAce from '@aminoeditor/vue-ace';

Vue.use(VueAce);

// the rest of main.js below
```

## _Component_
```
<template>
	<ace-editor v-model="code" @init="editorInit" lang="scss"></ace-editor>
</template>

<script>
export default {
	data () {
		return {
			code: 'body { background: blue; }',
			editorOptions: {
				showGutter: true
			}
		}
	},
	methods: {
		editorInit (editor) {
			require('ace-builds/src-min-noconflict/ext-language_tools');
			require('ace-builds/src-min-noconflict/mode-scss');
			require('ace-builds/src-min-noconflict/theme-ambiance');
			editor.session.setMode("ace/mode/scss");
			editor.commands.addCommand({
				name: "save",
				exec: this.save,
				bindKey: {mac: "cmd-s", win: "ctrl-s"}
			});
			editor.setOptions(this.editorOptions);
		}
	}
}
</script>
```

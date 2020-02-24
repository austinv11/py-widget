<template>
    <div class="PyWidget">
        <div class="PyInputBox">
            <vue-code-highlight language="python">
                <textarea v-bind="scriptText"></textarea>
            </vue-code-highlight>
        </div>
        <div class="PyOutputConsole">{{ consoleOutput }}</div>
    </div>
</template>

<script>
    import { component as VueCodeHighlight } from 'vue-code-highlight';
    import 'prism-es6/components/prism-python';
    import { build as buildSkulpt } from '../js/skulpt-engine'

    export default {
        name: "PyWidget",
        components: {
            VueCodeHighlight
        },
        data: function () {
            return {
                engineName: 'skulpt',
                scriptText: ''
            }
        },
        computed: {
            consoleOutput: function() {
                return this.engine.consoleText;
            },
            engine: function() {  //FIXME make dynamic
                if (this.engineName === 'skulpt') {
                    return buildSkulpt();
                } else {
                    throw ""
                }
            }
        }
    }
</script>

<style scoped>

</style>

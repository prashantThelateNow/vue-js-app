<!-- Basic concepts of Vue JS
=============================================================================

    - Vue instatnce
    - Conditional rendering
    - Events handling, 
    - Loops/list rendering, 
    - Data bindings, 
    - Two-way data bindings, 
    - Keyboard events,
    - Vue lifecycle hooks => [ beforeCreate() => created() => beforeMount() => mounted() => beforeUpdate() => updated() => beforeDestroy() => destroyed() ]
    - beforeUpdate() & updated() lifecycle hooks works when there is any changes occurs in components
-->

<template>
    <div class="content_main">
        <div class="content_main_block">
            <basic-concept></basic-concept>
        </div>
        <div class="content_main_block">
            <data-binding></data-binding>
        </div>
        
        <div class="content_main_block">
            <event-example></event-example>
        </div>
        
        <div class="content_main_block">
            <keyboard-event></keyboard-event>
        </div>
        
        <div class="content_main_block">
            <two-way-data-binding></two-way-data-binding>
        </div>
        
        <div class="content_main_block">
            <computed-properties></computed-properties>
        </div>
        
        <div class="content_main_block">
            <dynamic-css></dynamic-css>
        </div>
        
        <div class="content_main_block">
            <conditional-rendering></conditional-rendering>
        </div>
        
        <div class="content_main_block">
            <list-rendering></list-rendering>
        </div>
        
        <div class="content_main_block">
            <to-do-list></to-do-list>
        </div>
        
        <div class="content_main_block">
            <refs-example></refs-example>
        </div>
        
    </div>
</template >

<script>
import BasicConcept from '../components/BasicConcept.vue'
import DataBinding from '../components/DataBinding.vue'
import EventExample from '../components/Event.vue'
import KeyboardEvent from '../components/KeyboardEvents.vue'
import TwoWayDataBinding from '@/components/TwoWayDataBinding.vue'
import ComputedProperties from '@/components/ComputedProperties.vue'
import DynamicCSS from '@/components/DynamicCSS.vue'
import ConditionalRendering from '@/components/ConditionalRendering.vue'
import ListRendering from '@/components/ListRendering.vue'
import ToDoList from '@/components/ToDoList.vue'
import RefsExample from '@/components/Refs.vue'

export default {
    name: 'BasicConceptView',
    components: {
        'basic-concept': BasicConcept,
        'data-binding': DataBinding,
        'event-example': EventExample,
        'keyboard-event': KeyboardEvent,
        'two-way-data-binding': TwoWayDataBinding,
        'computed-properties': ComputedProperties,
        'dynamic-css': DynamicCSS,
        'conditional-rendering': ConditionalRendering,
        'list-rendering': ListRendering,
        'to-do-list': ToDoList,
        'refs-example': RefsExample
    }
}
</script>

<style scoped>
    .content_main {
        width: 100%;
        max-width: 1200px;
        margin: 10px auto;
        padding: 0 20px;
        box-sizing: border-box;
        background: lightcyan;
    }

    .content_main_block {
        list-style-type: none;
        padding: 12px;
        border: 1px solid #222;   
    }
</style>

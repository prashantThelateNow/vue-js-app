<template>
    <div>
        <component-nesting-main></component-nesting-main>
    </div>
</template>

<script>
import ComponentNestingMain from '@/components/component-nesting-example/ComponentNestingMain.vue';

export default {
    name: 'ComponentNestingView',
    components: {
        'component-nesting-main': ComponentNestingMain
    }
}
</script>
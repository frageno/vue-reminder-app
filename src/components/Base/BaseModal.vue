<template>
    <div class="modal" :class="cssClass">
        <div class="modal__box mx-auto py-6">
            <div class="modal__header">
                <slot name="header"></slot>
            </div>     
            <div class="modal__body">
                <slot name="body"></slot>
            </div>    
        </div>
    </div>
</template>
<script>
export default {
    props: ['cssClass'],
};
</script>

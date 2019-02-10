import Vue from 'vue';
import Icon from "./Icon";

export default Vue.component('modal', {
    components: {
        Icon,
    },

    props: {
        modalName: { type: String, default: 'modal' },
        show: { type: Boolean, default: false },
        closeOnEsc: { type: Boolean, default: true },
    },

    mounted: function () {
        if (this.$props.closeOnEsc) {
            document.addEventListener('keydown', e => {
                if (this.show && e.key === 'Escape') {
                    this.close();
                }
            })
        }
    },

    methods: {
        close: function () {
            this.$emit('close', this.$props.modalName);
        }
    },

    template: `
        <transition name="modal">
            <div class="modal-mask" v-show="show" v-on:click="close">
                <div class="modal-container" @click.stop>
                    <div v-on:click="close">
                        <icon name="x"
                              class="absolute pin-r pin-t m-2 text-neutral-500 cursor-pointer"
                              aria-label="Close modal"
                              role="button"
                        />
                    </div>
                    <slot/>
                </div>
            </div>
        </transition>
    `
})
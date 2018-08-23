export default {
    computed: {
        config() {
            return this.$store.state.config
        }
    },
    methods: {
        init() {
            this.$store.dispatch('init')
        }
    }
}

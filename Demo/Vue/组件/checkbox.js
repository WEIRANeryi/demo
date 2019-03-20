var checkbox = {
    template:`
            <div>
                <label>
                    first: <input type="checkbox" value="first" v-model="boxvalue">
                </label>
                <label>
                    second: <input type="checkbox" value="second" v-model="boxvalue">
                </label>
                <label>
                    third: <input type="checkbox" value="third" v-model="boxvalue">
                </label>
                <label>
                    fouth: <input type="checkbox" value="fouth" v-model="boxvalue">
                </label>
                <label>
                    fifth: <input type="checkbox" value="fifth" v-model="boxvalue">
                </label>
            </div>
        `,
    data() {
        return{
            boxvalue: []
        }
    },
    watch: {
        boxvalue(value) {
            this.$emit("inputs", value)
        }
    }
}
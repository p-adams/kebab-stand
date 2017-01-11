export default {
    functional: true,
    render(h, context){
        return h(
            'h1', {
                style: {
                    background: 'red'
                }
            }, 'Kebab Stand'
        )
    }
}

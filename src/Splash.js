export default {
    functional: true,
    render(h, context){
        return h(
            'h1', {
                style: {
                    background: 'yellowgreen',
                    color: 'pink',
                    border: '10px solid white'
                }
            }, 'Kebab Stand'
        )
    }
}

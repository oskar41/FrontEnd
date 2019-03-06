<template>
    <div class="wrapper" :class="menuState? 'open' : 'close' ">
        <nav>
            <div class="menu-link">
                <div class="menu-item">
                    <router-link :to="{name: 'products'}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H20C20.5304 3 21.0391 3.21071 21.4142 3.58579C21.7893 3.96086 22 4.46957 22 5V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 15L17 21H7L12 15Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <div class="text">Overview</div>
                    </router-link>
                </div>

            </div>
        </nav>

    </div>

</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Menu",
        computed: {
            ...mapGetters([
                'menuState'
            ]),
        },
    }
</script>

<style scoped>
    .wrapper{
        position: absolute;
        width: 70px;
        height: 100%;
        left: 0px;
        top: 64px;
        overflow: hidden;
        background: #535769;
        transition: .5s;
    }
    .wrapper.open {
        width: 249px;
    }
    .wrapper.open .text{
        visibility: visible;
    }
    svg{
        width: ;
    }
    .menu-link{
        position: absolute;
        width: 249px;
        height: 72px;
        left: 0px;
        top: 116px;
    }
    .menu-item{
        position: absolute;
        width: 249px;
        left: 0px;
        top: 0px;
        bottom: 0px;

        background: #6C7897;
    }
    .menu-item .text {
        visibility: hidden;
        position: absolute;
        width: 82px;
        height: 24px;
        left: 64px;
        top: calc(50% - 24px/2);

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 20px;

        color: #FFFFFF;
    }
    .menu-item svg{
        position: absolute;
        width: 24px;
        height: 24px;
        left: 24px;
        top: calc(50% - 24px/2);
    }
</style>

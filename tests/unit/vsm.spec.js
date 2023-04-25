import { mount } from '@vue/test-utils'
import vsm from '@/vsm.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: vsm,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

describe('test vsm component', () => {
    it('updates query params when radio buttons are clicked', async () => {
        router.push({
            path: '/',
            query: {
                bb: 1.5,
                aa: 1,
                cc: 'hello',
            },
        })

        await router.isReady()

        const wrapper = mount(vsm, {
            global: {
                plugins: [router]
            },
        })

        //validate routes
        expect(router.currentRoute.value.query.bb.toString()).toBe('1.5')
        expect(router.currentRoute.value.query.aa.toString()).toBe('1')
        expect(router.currentRoute.value.query.cc.toString()).toBe('hello')

        //validate data fields
        expect(wrapper.vm.aa.toString()).toBe('1')
        expect(wrapper.vm.bb.toString()).toBe('1.5')
        expect(wrapper.vm.cc.toString()).toBe('hello')

        //trigger button clicks
        await wrapper.find('#Two').trigger('click')
        expect(wrapper.vm.aa.toString()).toBe('2')

        await wrapper.find('#scale5').trigger('click')
        expect(wrapper.vm.bb.toString()).toBe('5')

        await wrapper.vm.updateUrl().then(() => {
            expect(router.currentRoute.value.query.bb.toString()).toBe('5')
            expect(router.currentRoute.value.query.aa.toString()).toBe('2')
            expect(router.currentRoute.value.query.cc.toString()).toBe('hello')
        })
    })
})

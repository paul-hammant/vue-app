import { mount } from '@vue/test-utils'
import vsm from '@/vsm.vue'

describe('test vsm component', () => {
    it('updates query params when radio buttons are clicked', async () => {
        const wrapper = mount(vsm, {
            global: {
                mocks: {
                    $route: {
                        query: {
                            aa: '1.5',
                            bb: '1',
                            cc: 'hello',
                        },
                    },
                    $router: {
                        push: jest.fn(),
                    },
                },
            },
        })

        const button = wrapper.find('#scale5')
        const twoRadio = wrapper.find('#Two');
        
        twoRadio.trigger('click');
        button.trigger('click')

        setTimeout(() => {
            expect(wrapper.vm.bb).toBe('5')
            expect(wrapper.vm.aa).toBe('2')
            expect(wrapper.vm.cc).toBe('hello')

            expect(wrapper.vm.$router.push).toHaveBeenCalledWith({
                path: '/',
                query: {
                    bb: '5',
                    aa: '1.5',
                    cc: 'hello',
                },
            })
        }, 1000)
    })
})

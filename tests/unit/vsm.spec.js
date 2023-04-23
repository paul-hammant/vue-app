import {mount} from '@vue/test-utils'
import vsm from '@/vsm.vue'

describe('test vsm component', () => {
    it('updates query params when radio buttons are clicked', async () => {
        const wrappedTestComponent = mount(vsm, {
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

        expect(wrappedTestComponent.vm.bb).toBe(1)
        expect(wrappedTestComponent.vm.aa).toBe('1.5')
        expect(wrappedTestComponent.vm.cc).toBe('hello')

        wrappedTestComponent.find('#Two').trigger('click');
        wrappedTestComponent.find('#scale5').trigger('click')

        setTimeout(() => {
            expect(wrappedTestComponent.vm.bb).toBe('5')
            expect(wrappedTestComponent.vm.aa).toBe('2')

            expect(wrappedTestComponent.vm.$router.push).toHaveBeenCalledWith({
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

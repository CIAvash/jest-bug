import { waitFor, render } from '@testing-library/svelte';
import App from './App.svelte';

it('Should render home', async () => {
    const { container, getByText } = render(App);
    
    await waitFor(() => expect(container.querySelector('h1').textContent).toEqual('Bug'));
})
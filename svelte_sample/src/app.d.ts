// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { MetaMaskInpageProvider } from "@metamask/providers";



declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Window { ethereum?: MetaMaskInpageProvider }
		
	}

}

export {};

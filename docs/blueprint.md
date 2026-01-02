# **App Name**: Axiom Trade Pulse Replica

## Core Features:

- Token Table Rendering: Render token data in a tabular format with columns for New Pairs, Final Stretch, and Migrated tokens. Includes token name, price, and other relevant data.
- Interactive Elements: Implement interactive elements such as popovers, tooltips, and modals to display additional information about each token upon hover or click.
- Sorting Functionality: Enable sorting of tokens within each column based on different metrics like price, volume, or change percentage.
- Real-time Price Updates: Fetch and display real-time price updates for each token using a WebSocket mock, with smooth color transitions to indicate price changes.
- Loading State Management: Implement various loading state indicators such as skeleton loaders, shimmer effects, and progressive loading to enhance user experience during data fetching.
- Error Boundary Handling: Implement error boundaries to catch and handle any errors that occur during data fetching or rendering, preventing the entire application from crashing.

## Style Guidelines:

- Primary color: Deep purple (#2A2745) for a sophisticated feel.
- Background color: Dark gray (#1E1B2E) to provide contrast and focus on content.
- Accent color: Electric blue (#7DF9FF) for highlights and interactive elements.
- Headline Font: 'Poppins' (sans-serif) for titles and short headings. Note: currently only Google Fonts are supported.
- Body Font: 'Inter' (sans-serif) for main content and descriptions. Note: currently only Google Fonts are supported.
- Use minimalist and clear icons to represent different token metrics and actions.
- Pixel-perfect layout adhering closely to the reference website, ensuring a visually identical representation of the token discovery table.
- Smooth transitions and subtle animations for interactive elements and real-time price updates.
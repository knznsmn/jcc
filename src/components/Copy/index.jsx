'use client';

import { useEffect } from 'react';
import styles from './Copy.module.css';

export default function Copy() {
  useEffect(() => {
    const addCopyButtons = () => {
      // Select all pre elements and add copyable class + button
      const preElements = document.querySelectorAll('section[class*="__md"] pre');
      console.log('Found pre elements:', preElements.length);
      
      preElements.forEach((pre) => {
        // Add class to pre element
        pre.classList.add('code');
        
        // Skip if button already exists
        if (pre.querySelector('[data-copy-btn="true"]')) return;
        
        const button = document.createElement('button');
        button.setAttribute('data-copy-btn', 'true');
        button.className = styles.button;
        button.innerHTML = '<i class="icon-copy"></i>';
        button.type = 'button';
        
        button.addEventListener('click', async () => {
          const code = pre.querySelector('code');
          const text = (code?.textContent || '').trim();
          
          try {
            await navigator.clipboard.writeText(text);
            button.innerHTML = '✓';
            setTimeout(() => {
              button.innerHTML = '<i class="icon-copy"></i>';
            }, 2000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        });
        
        pre.className += ` ${styles.codeblock}`;
        pre.appendChild(button);
      });
    };
    
    // Run on mount and after a short delay to ensure content is rendered
    addCopyButtons();
    const timer = setTimeout(addCopyButtons, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return null;
}

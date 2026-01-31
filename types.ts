import React from 'react';

export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    category: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    image: string;
}

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}
import React from 'react';
import Head from "next/head";
import {blogsData} from "../../../lib/data";

const styles = {
    container: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        maxWidth: '700px',
        maxHeight:'500px',
        overflowY:'auto',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    text: {
        fontSize: '10px',
        marginBottom: '10px',
        lineHeight: '1.5',
        color: '#555',
    },
};

const Index = () => {
    return (
        <div style={styles.container}>
            <Head>
                <title>Blog</title>
            </Head>

            <h1 style={styles.title}>Blog</h1>
            <p style={styles.text}>
                Welcome to our blog! Stay tuned for exciting posts and updates.
            </p>
            <ul>
                {blogsData.map((blog: any) => (
                    <li style={styles.text} key={blog.id}>
                        <h3 style={{marginBottom: 12,}}>{blog.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
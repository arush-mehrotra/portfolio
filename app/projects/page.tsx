'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FIFA from '../../images/fifa.jpeg';
import AIRBNB from '../../images/airbnb.png';
import LINUX from '../../images/linux.png';
import PFJ from '../../images/pfj.png';
import CC from '../../images/CC.png';

export default function Projects() {

    const [isLargeScreen, setIsLargeScreen] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth >= 1024); // 1024px is a typical breakpoint for large screens
      };
  
      handleResize(); // Set the initial value
      window.addEventListener('resize', handleResize); // Update value on resize
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const styles = {
      projectsContainer: {
        padding: '2rem',
        color: '#e0e0e0',
      },
      header: {
        textAlign: 'left' as const,
        fontWeight: 'bold' as const,
        fontSize: '4rem',
        marginBottom: '3rem',
      },
      project: {
        marginBottom: '3rem',
        border: '1px solid #333',
        borderRadius: '10px',
        padding: '1.5rem',
        backgroundColor: '#1f1f1f',
        display: 'flex',
        flexDirection: 'row' as const,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      projectInfo: {
        flex: 1,
        marginRight: '1.5rem',
      },
      projectImage: {
        width: '300px',
        height: '150px',
        borderRadius: '10px',
        backgroundColor: '#333',
      },
      projectTitle: {
        fontSize: '1.5rem',
        marginBottom: '0.5rem',
      },
      projectDate: {
        color: '#888',
        fontSize: '0.9rem',
        marginBottom: '1rem',
      },
      projectDescription: {
        marginBottom: '1rem',
      },
      projectTags: {
        display: 'flex',
        gap: '0.5rem',
      },
      tag: {
        backgroundColor: '#00008b',
        padding: '0.5rem',
        borderRadius: '5px',
        color: '#fff',
        fontSize: '0.8rem',
      },
    };
  
    return (
      <div style={styles.projectsContainer}>
        <h1 style={styles.header}>Projects</h1>
        <div style={styles.project}>
          <div style={styles.projectInfo}>
            <h2 style={styles.projectTitle}>PennOS</h2>
            <p style={styles.projectDate}>April - May 2024</p>
            <p style={styles.projectDescription}>
            In this project, we successfully built a single-core operating system, with a FAT-based filesystem, a kernel, and a scheduler that correctly decides which processes to run. We have preserved the necessary abstractions between kernel, system, and user land. We have implemented a number of builtin functions that can be run from our shell and interact with the filesystem. We have tested the functionality of the entire system, including the correct CPU utilization and memory leaks using Valgrind.
            </p>
            <div style={styles.projectTags}>
              <span style={styles.tag}>C</span>
              <span style={styles.tag}>POSIX Library</span>
            </div>
          </div>
          {isLargeScreen && (
          <Image
            src={LINUX}
            alt="Project Image"
            width={300}
            height={150}
            className="rounded-lg"
          />
        )}
        </div>

        <div style={styles.project}>
          <div style={styles.projectInfo}>
            <h2 style={styles.projectTitle}>Partners for Justice</h2>
            <p style={styles.projectDate}>Feb - May 2024</p>
            <p style={styles.projectDescription}>
            In collaboration with Partners for Justice, a national nonprofit organization dedicated to transforming the legal system, I developed a tool that automates data analysis for advocate databases stored in Airtable. This tool addresses the challenges of manual data analysis and repetitive tasks across multiple databases as the number of advocate offices grows.

Using the Airtable API, the tool pulls data from specified databases and performs queries to calculate key insights, such as the number of cases opened and the comparison between entered and provided service goals. Users can specify date ranges for targeted analysis, reducing a process that once took days to just minutes. This tool significantly enhances efficiency and accuracy in data reporting and analysis, supporting Partners for Justice&apos;s mission to save clients from incarceration and connect them with vital social services.
            </p>
            <div style={styles.projectTags}>
              <span style={styles.tag}>Pandas</span>
              <span style={styles.tag}>Airtable</span>
              <span style={styles.tag}>Python</span>
            </div>
          </div>
          {isLargeScreen && (
          <Image
            src={PFJ}
            alt="Project Image"
            width={300}
            height={150}
            className="rounded-lg"
          />
        )}
        </div>

        <div style={styles.project}>
          <div style={styles.projectInfo}>
            <h2 style={styles.projectTitle}>AirBnB Price Prediction Machine Learning Model</h2>
            <p style={styles.projectDate}>April - May 2023</p>
            <p style={styles.projectDescription}>
            In this project, we aimed to better understand the drivers of price for various Airbnb listings in New York City in 2019. We selected three datasets to achieve this goal. The first dataset, airbnb_ddf, contains information on price, geographical location, neighborhood, room type, reviews, and other features of Airbnb listings. The second dataset, crime_ddf, provides detailed records of various crimes committed across New York City, including their classification (felony, misdemeanor, or violation) and geographical location. The third dataset, income_df, offers data on the median household income for each of 200+ neighborhoods, adding complexity to our analysis. By aggregating these datasets and merging them, we developed a comprehensive understanding of both intrinsic factors (e.g., room type, reviews) and external factors (e.g., crime levels, income) that influence Airbnb listing prices.
            </p>
            <div style={styles.projectTags}>
              <span style={styles.tag}>Pandas</span>
              <span style={styles.tag}>PyTorch</span>
              <span style={styles.tag}>scikit-learn</span>
            </div>
          </div>
          {isLargeScreen && (
          <Image
            src={AIRBNB}
            alt="Project Image"
            width={300}
            height={150}
            className="rounded-lg"
          />
        )}
        </div>

        <div style={styles.project}>
          <div style={styles.projectInfo}>
            <h2 style={styles.projectTitle}>FIFA Database Application</h2>
            <p style={styles.projectDate}>April - May 2023</p>
            <p style={styles.projectDescription}>
            In this project, we successfully developed a comprehensive web application for analyzing and comparing football players and teams across various leagues and seasons. The application allows users to track the yearly progression of individual attributes, such as overall rating, shooting, and dribbling, and compare multiple players and teams across these attributes. Users can filter and search for specific players and teams, with visualization features like graphs and charts to enhance comparisons. 
            </p>
            <div style={styles.projectTags}>
              <span style={styles.tag}>ReactJS</span>
              <span style={styles.tag}>AWS RDS</span>
              <span style={styles.tag}>Auth0</span>
              <span style={styles.tag}>Axios</span>
            </div>
          </div>
          {isLargeScreen && (
          <Image
            src={FIFA}
            alt="Project Image"
            width={300}
            height={150}
            className="rounded-lg"
          />
        )}
        </div>
        
        <div style={styles.project}>
          <div style={styles.projectInfo}>
            <h2 style={styles.projectTitle}>CommonCents Web Application</h2>
            <p style={styles.projectDate}>Sep - Dec 2021</p>
            <p style={styles.projectDescription}>
            In collaboration with Penn Spark, we developed CommonCents, a gamified edtech platform designed to empower students with the knowledge to manage their money and achieve financial independence. This platform aims to make personal finance learning innovative, interesting, and inclusive for a diverse audience, ranging from high school students to undergraduates.

As a team of four developers, we drove the application from development to deployment. CommonCents now attracts over 2000 monthly visits across 8 campuses and serves 1600 students.
            </p>
            <div style={styles.projectTags}>
              <span style={styles.tag}>ReactJS</span>
              <span style={styles.tag}>Node</span>
              <span style={styles.tag}>Express</span>
              <span style={styles.tag}>MongoDB</span>
            </div>
          </div>
          {isLargeScreen && (
          <Image
            src={CC}
            alt="Project Image"
            width={300}
            height={150}
            className="rounded-lg"
          />
        )}
        </div>

      </div>
    );
  }
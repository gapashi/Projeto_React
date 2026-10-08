import { useState } from 'react';
import './CoursesPage.css';

const coursesData = [
    { 
        id: 1,
        title: 'React.js do Zero ao App',
        category: 'Front-end',
        instructor: 'Prof. Armando'
    },
    {
        id: 2,
        title: 'Lógica de Programação com C#',
        category: 'Back-end',
        instructor: 'Profª Fabi'
    },
    {
        id: 3,
        title: 'Modelagem e Estrutura SQL',
        category: 'Banco de Dados Relacionais',
        instructor: 'Profª Ana'
    },
    {
        id: 4,
        title: 'MongoDB na Prática',
        category: 'Banco de Dados Não-Relacionais',
        instructor: 'Prof Ronaldo'
    },
    {
        id: 5,
        title: 'Princípios de Hacking Ético',
        category: 'Cibersegurança',
        instructor: 'Prof Gabriel'
    },
    {
        id: 6,
        title: 'Python para Dados e IA',
        category: 'Análise de Dados e IA',
        instructor: 'Profª Cristina'
    }
];

const categories = [
    'Todos', 'Front-end', 'Back-end',
    'Banco de Dados Relacionais', 'Banco de Dados Não-Relacionais',
    'Cibersegurança', 'Análise de Dados com IA'
];

function CoursesPage() {
    const [activeFilter, setActiveFilter] = useState('Todos');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = coursesData.filter((course) => {
        const matchCategory = activeFilter === 'Todos' || course.category === activeFilter;
        const matchSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="courses-page-container">
            <aside className="courses-filters">
                <h3>Categorias</h3>
                {categories.map((category) => (
                    <button
                    key={category}
                    className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category)}
                    >{category}</button>
                ))}
            </aside>

            <div className="courses-grid-area">
                <div className="courses-header">
                    <h2>Cursos Disponíveis</h2>
                    <input 
                        type="text"
                        className='courses-search-bar'
                        placeholder="Buscar curso por nome..."
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </div>

                <div className="courses-grid">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div key={course.id} className="course-card">
                                <div className="course-card-image">{course.category}</div>
                                <h3 className="course-title">{course.title}</h3>
                                <p className="course-instructor">{course.instructor}</p>
                                <button className="add-course-btn" onClick={() => alert('Curso adicionado ao Dashboard')}>
                                    + Adicionar ao Dashboard
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="no-courses-msg">Nenhum curso encontrado.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CoursesPage;
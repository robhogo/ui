import authRepository from '@/repositories/authRepository';

const repositories ={
    auth: authRepository,
};

export const RepositoryFactory = {
    get: name => repositories[name]
    
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const API = axios.create({
  baseURL: "https://api.garirhat.com/api/v1",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// alLocation list
  export const useAlLocation = () => {
    const getAlLocation = async () => {
      const response = await API.get("/location/division_districts");
      return response.data.data;
    };
  
    const {
      data: alLocation = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["alLocation"],
      queryFn: getAlLocation,
    });
  
    return { alLocation, isLoading, isError, error, refetch };
  };

// Products list
  export const useAlFeature = () => {
    const getAlFeature = async () => {
      const response = await API.get("/feature/all");
      return response.data.data;
    };
  
    const {
      data: alFeature = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["alFeature"],
      queryFn: getAlFeature,
    });
  
    return { alFeature, isLoading, isError, error, refetch };
  };

  //  User Profile 
  export const useUserProfile = () => {
    const getUserProfile = async () => {
      const response = await API.get(`/user/me`);
      return response.data;
    };
    const {
      data: userProfile = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["UserProfile"],
      queryFn: getUserProfile,
    });
    return { userProfile, isLoading, isError, error, refetch };
  };
  //  all brand 
  export const useAllBrand = () => {
    const getAllBrand = async () => {
      const response = await API.get(`/brand`);
      return response.data.data;
    };
    const {
      data: allBrand = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["allBrand"],
      queryFn: getAllBrand,
    });
    return { allBrand, isLoading, isError, error, refetch };
  };
  // all model by brand 
  export const useModelByBrand = (brandID) => {
    const getModelByBrand = async () => {
      const response = await API.get(`/model?brand_id=${brandID}`);
      return response.data;
    };
    const {
      data: modelByBrand = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["modelByBrand", brandID],
      queryFn: getModelByBrand,
    });
    return { modelByBrand, isLoading, isError, error, refetch };
  };

  // get brand and model 
  export const useBrandandModel = () => {
    const getModelandBrand = async () => {
      const response = await API.get(`/brand/with-model?status=active`);
      return response.data;

    };
    const {
      data: modelandBrand = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["ModelandBrand"],
      queryFn: getModelandBrand,
    });
    return { modelandBrand, isLoading, isError, error, refetch };
  };
  
  // get single vechile  
  export const useSingleVechile = (vehicleID) => {
    const getSingleVechile = async () => {
      const response = await API.get(`/vehicle/${vehicleID}`);
      return response.data.data;

    };
    const {
      data: singleVechile = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["singleVechile", vehicleID],
      queryFn: getSingleVechile,
    });
    return { singleVechile, isLoading, isError, error, refetch };
  };
  
  
  // const storedLocation = localStorage.getItem("selectedLocation"); &district=${storedLocation}  location filter
  // /vehicle/all?vehicle_code=T001&model=Camry&year_of_manufacture=2020&year_of_manufacture=2021&make=Honda&page=2&limit=2&sort=&vehicle_code=NATW&page=2&limit=1000?vehicle_code=T002
// All Car list
export const useAllCarList = ({selectBrand}) => {
  const getAllCarList = async () => {

    const brandName = selectBrand;
    const response = await API.get(`/vehicle/all?make=${encodeURIComponent(brandName)}&limit=1000`);
    return response.data.data;
  };

  const {
    data: allCarList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allCarList", selectBrand],
    queryFn: getAllCarList,
  });

  return { allCarList, isLoading, isError, error, refetch };
};


  // get WishList vechile  
  export const useWishListVechile = (user_id) => {
    const getWishListVechile = async () => {
      const response = await API.get(`/wishlist/my?user_id=${user_id}`);
      return response.data.data;

    };
    const {
      data: wishListVechile = [],
      isLoading,
      isError,
      error,
      refetch,
    } = useQuery({
      queryKey: ["wishListVechile", user_id],
      queryFn: getWishListVechile,
    });
    return { wishListVechile, isLoading, isError, error, refetch };
  };
 
  // show search list
export const useSearchCarList = (searchBrand) => {
  const getSearchCarList = async () => {
    const response = await API.get(`/vehicle/all?make=${searchBrand}&limit=1000`);
    return response.data.data;
  };

  const {
    data: searchCarList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["searchCarList", searchBrand],
    queryFn: getSearchCarList,
  });

  return { searchCarList, isLoading, isError, error, refetch };
};

//show electrict car 
export const useElecticCarList = () => {
  const getElecticCarList = async () => {
    const response = await API.get(`/vehicle/all?fuel_type=Electric&limit=1000`);
    return response.data.data;
  };

  const {
    data: electicCarList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["electicCarList"],
    queryFn: getElecticCarList,
  });

  return { electicCarList, isLoading, isError, error, refetch };
};

//show Upcoming car 
export const useUpcomingCarList = () => {
  const getUpcomingCarList = async () => {
    const response = await API.get(`/vehicle/all?vehicle_condition=Upcoming Car&limit=1000`);
    return response.data.data;
  };

  const {
    data: upcomingCarList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["upcomingCarList"],
    queryFn: getUpcomingCarList,
  });

  return { upcomingCarList, isLoading, isError, error, refetch };
};

//budget vehicle list 

export const useBudgetCarList = (startPrice, endPrice) => {
  const getBudgetCarList = async () => {
   // /vehicle/web?start_price=1&end_price=1000000&start_price=1000000&end_price=3000000
    const response = await API.get(`/vehicle/all?start_price=${startPrice}&end_price=${endPrice}&limit=1000`);
    return response.data.data;
  };

  const {
    data: budgetCarList = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["budgetCarList", startPrice, endPrice ],
    queryFn: getBudgetCarList,
    enabled: !!startPrice && !!endPrice, 
  });

  return { budgetCarList, isLoading, isError, error, refetch };
};






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

  // const storedLocation = localStorage.getItem("selectedLocation"); &district=${storedLocation}  location filter
  // /vehicle/all?vehicle_code=T001&model=Camry&year_of_manufacture=2020&year_of_manufacture=2021&make=Honda&page=2&limit=2&sort=&vehicle_code=NATW&page=2&limit=1000?vehicle_code=T002
// All Car list
  export const useAllCarList = ({selectBrand}) => {
    const getAllCarList = async () => {

    // const OtherSelectBrand = ["Audi", "BMW", "Ford"];

    // // Ensure selectBrand is always an array
    // const finalBrands = selectBrand.length > 0 ? selectBrand : OtherSelectBrand;

    // // Convert brands to query parameters
    // const brandQuery = finalBrands
    //   .map((brand) => `make=${encodeURIComponent(brand)}`)
    //   .join("&");


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
  
  
